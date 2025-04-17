
<?php
// Include database connection
require_once 'db_connect.php';

// Set headers to allow cross-origin requests (for development)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get product by ID
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if ID parameter is provided
    if (!isset($_GET['id']) || empty($_GET['id'])) {
        http_response_code(400);
        json_response([
            "success" => false,
            "error" => "Product ID is required"
        ]);
    }
    
    $id = intval($_GET['id']);
    
    try {
        $query = "SELECT * FROM products WHERE id = ?";
        $stmt = $conn->prepare($query);
        
        if ($stmt === false) {
            throw new Exception("Prepare failed: " . $conn->error);
        }
        
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result === false) {
            throw new Exception("Error executing query: " . $stmt->error);
        }
        
        if ($result->num_rows === 0) {
            http_response_code(404);
            json_response([
                "success" => false,
                "error" => "Product not found"
            ]);
        }
        
        $product = $result->fetch_assoc();
        
        // Transform the data to match our frontend format
        $transformedProduct = [
            "id" => intval($product['id']),
            "name" => $product['name'],
            "description" => $product['description'],
            "imageSrc" => $product['image'],
            "price" => "$" . number_format(rand(5, 15), 2), // Example price
            "category" => "smoothie" // Example category
        ];
        
        json_response([
            "success" => true,
            "data" => $transformedProduct
        ]);
        
        $stmt->close();
    } catch (Exception $e) {
        http_response_code(500);
        json_response([
            "success" => false,
            "error" => $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    json_response([
        "success" => false,
        "error" => "Method not allowed"
    ]);
}

$conn->close();
?>

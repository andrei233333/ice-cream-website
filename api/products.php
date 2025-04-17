<?php
// Helper function to send JSON response
function json_response($data, $status_code = 200) {
    http_response_code($status_code);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

// Set headers for CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include database connection
require_once 'db_connect.php';

// Initialize database connection
$database = new Database();
$db = $database->getConnection();

try {
    // Check if an ID parameter is provided
    if (isset($_GET['id']) && !empty($_GET['id'])) {
        // Get single product
        $id = $_GET['id'];
        $query = "SELECT * FROM products WHERE id_product = :id";
        $stmt = $db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $product = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($product) {
            json_response([
                "status" => "success",
                "data" => [$product] // Return as array to maintain consistent response format
            ]);
        } else {
            json_response([
                "status" => "error",
                "message" => "Product not found"
            ], 404);
        }
    } else {
        // Get all products
        $query = "SELECT * FROM products ORDER BY id_product ASC";
        $stmt = $db->prepare($query);
        $stmt->execute();

        // Fetch all products
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Return success response
        json_response([
            "status" => "success",
            "data" => $products
        ]);
    }
} catch(PDOException $e) {
    // Return error response
    json_response([
        "status" => "error",
        "message" => "Error fetching products: " . $e->getMessage()
    ], 500);
}
?>

<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include database connection
require_once 'db_connect.php';

// Initialize database connection
$database = new Database();
$db = $database->getConnection();

try {
    // Handle different HTTP methods
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            // Get all products
            $query = "SELECT * FROM products ORDER BY id_product ASC";
            $stmt = $db->prepare($query);
            $stmt->execute();
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode([
                "status" => "success",
                "data" => $products
            ]);
            break;

        case 'POST':
            // Create new product
            $data = json_decode(file_get_contents('php://input'), true);
            $query = "INSERT INTO products (name, description, image, ingredients, health_benefits, nutrition_facts) 
                     VALUES (:name, :description, :image, :ingredients, :health_benefits, :nutrition_facts)";
            $stmt = $db->prepare($query);
            $stmt->execute($data);
            echo json_encode([
                "status" => "success",
                "message" => "Product created successfully",
                "id" => $db->lastInsertId()
            ]);
            break;

        case 'PUT':
            // Update product
            $data = json_decode(file_get_contents('php://input'), true);
            $query = "UPDATE products SET 
                     name = :name,
                     description = :description,
                     image = :image,
                     ingredients = :ingredients,
                     health_benefits = :health_benefits,
                     nutrition_facts = :nutrition_facts
                     WHERE id_product = :id_product";
            $stmt = $db->prepare($query);
            $stmt->execute($data);
            echo json_encode([
                "status" => "success",
                "message" => "Product updated successfully"
            ]);
            break;

        case 'DELETE':
            // Delete product
            $id = $_GET['id'];
            $query = "DELETE FROM products WHERE id_product = :id";
            $stmt = $db->prepare($query);
            $stmt->execute(['id' => $id]);
            echo json_encode([
                "status" => "success",
                "message" => "Product deleted successfully"
            ]);
            break;
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Database error: " . $e->getMessage()
    ]);
}
?> 
<?php
require __DIR__ . "/vendor/autoload.php";   // Load Composer packages

// Load the .env file from the project root
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Validate that required variables are present
$dotenv->required(["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME"]);

// Access variables via $_ENV or getenv()
$conn = new mysqli(
    $_ENV["DB_HOST"],
    $_ENV["DB_USER"],
    $_ENV["DB_PASSWORD"],
    $_ENV["DB_NAME"]
);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
?>
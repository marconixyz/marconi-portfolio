<?php
$servername = "	mysql742.umbler.com";
$username = "marc_root";
$password = "123qwe123";
$dbname = "marc_formulario";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        throw new Exception("Erro ao conectar ao banco de dados: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = trim($_POST["input-1"]);
        $email = trim($_POST["input-2"]);
        $description = trim($_POST["input-3"]);

        // Verificar se todos os campos estão preenchidos
        if (empty($name) || empty($email) || empty($description)) {
            throw new Exception("Por favor, preencha todos os campos do formulário.");
        }

        $sql = "INSERT INTO interessado (name, email, description) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        if (!$stmt) {
            throw new Exception("Erro na preparação da consulta SQL: " . $conn->error);
        }

        $stmt->bind_param("sss", $name, $email, $description);

        if (!$stmt->execute()) {
            throw new Exception("Erro ao executar a consulta SQL: " . $stmt->error);
        }

        echo "Formulário enviado com sucesso!";

        $stmt->close();
        $conn->close();
    }
} catch (Exception $e) {
    http_response_code(500);
    echo "Erro ao enviar o formulário. " . $e->getMessage();
}
?>

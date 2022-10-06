<?php 
require "../.env";

header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8"); 
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE"); 
header("Access-Control-Max-Age: 3600"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 


$requestType = $_SERVER["REQUEST_METHOD"];


$servername = "localhost:3306";
$username = "root";
$password = getenv("PASSWORD");


if($requestType == "GET"){
try {
    $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $statement = $conn->query("select * from pip");
    $result = $statement->fetchAll();

    echo json_encode($result);
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
}
elseif($requestType == "POST"){
    $input = (array) json_decode(file_get_contents('php://input'), TRUE);
    echo $input["username"];
    echo $input["message"];

    $statement = "
      INSERT INTO pip
        (username, message, avatar)
      VALUES
        (:username, :message, :avatar);
    ";
    $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
    $statement = $conn->prepare($statement);
    $statement->execute(array(
      'username' => $input['username'],
      'message' => $input['message'],
      'avatar' => "#"
    ));
}
elseif($requestType == "DELETE"){
  $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);

  $input = (array) json_decode(file_get_contents('php://input'), TRUE);
  $id = $input["id"];

  $sql = "
    DELETE FROM pip WHERE id=?;
  ";
  $stmt= $conn->prepare($sql);
  $stmt->execute([$id]);;
}
elseif($requestType == "PUT"){
  $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);

  $input = (array) json_decode(file_get_contents('php://input'), TRUE);
  $id = $input["id"];
  $username = $input["username"];
  $message = $input["message"];

  $sql = "UPDATE pip SET username=?, message=? WHERE id=?";
  $stmt= $conn->prepare($sql);
  $stmt->execute([$username, $message, $id]);
}




// if( isset($_POST['pip-name']) && isset($_POST['pip-content']) ){
//   $name = $_POST['pip-name'];
//   $message = $_POST['pip-content'];
   
//   echo "navn: ".$name." besked: ".$message;
//   $statement = "
//       INSERT INTO pip
//         (username, message, avatar)
//       VALUES
//         (:username, :message, :avatar);
//     ";
//     $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
//     $statement = $conn->prepare($statement);
//     $statement->execute(array(
//       'username' => $name,
//       'message' => $message,
//       'avatar' => "#"
//     ));
// }



?> 
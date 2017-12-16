<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-type");
$data = array(
);
$conn = new mysqli("localhost", "root", "root", "test");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT Name, Comments FROM contactform";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        $temp = array('Name' => $row["Name"], 'Comments' => $row["Comments"]);
        array_push($data, $temp);
        //echo "Name: " . $row["Name"]. " - Comments: " . $row["Comments"]. "<br>";
    }
} else {
    echo "0 结果";
}
echo json_encode($data);
$conn->close();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata, false);

if(empty($request)){

}else{
    $conn = new mysqli("localhost", "root", "root", "test");
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO contactform (Name, Email, Address, Comments)
    VALUES ('$request->name', '$request->email', '$request->address', '$request->comments')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    mysqli_close($conn);

}

?>

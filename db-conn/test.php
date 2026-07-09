<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = '127.0.0.1';
$user = 'root';
$pwd = '20050509';
$db = 'school';
$port = 3306;

$conn = mysqli_connect($host, $user, $pwd, $db, $port);
mysqli_set_charset($conn, 'utf8mb4');

if (!$conn) {
    die("数据库连接失败：" . mysqli_connect_error());
}
echo "<h2>数据库连接成功</h2><hr>";

echo "<h3>===== student 学生表全部数据 =====</h3>";
$sql1 = "SELECT * FROM student";
$result1 = mysqli_query($conn, $sql1);
while ($row = mysqli_fetch_assoc($result1)) {
    echo "<pre>";
    print_r($row);
    echo "</pre><br>";
}

echo "<hr>";

echo "<h3>===== student_score 成绩表全部数据 =====</h3>";
$sql2 = "SELECT * FROM student_score";
$result2 = mysqli_query($conn, $sql2);
while ($row2 = mysqli_fetch_assoc($result2)) {
    echo "<pre>";
    print_r($row2);
    echo "</pre><br>";
}

mysqli_close($conn);
?>
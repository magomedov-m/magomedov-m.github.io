<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<title>notary</title>
</head>
<body>
<?php 
require 'connect.php';
$first_name = trim($_REQUEST['first_name']);
$last_name = trim($_REQUEST['last_name']);
$email = trim($_REQUEST['email']);

$insert_sql = "INSERT INTO users (first_name, last_name, email)" .
"VALUES('{$first_name}', '{$last_name}', '{$email}');";
mysql_query($insert_sql);
echo "<p>Новая запись вставлена в базу!</p>";
?>
</body>
</html>
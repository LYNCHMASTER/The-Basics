<?php
$hello = 'hello';
echo $hello;
$username = $_POST['username'];
echo $username;
$password = $_POST['password'];
if(!$username && !$password){
?>
<form method="post">
  <input type="text" name="username"/>
  <input type="password" name="password"/>
  <input type="submit">
</form>
<?php } ?>

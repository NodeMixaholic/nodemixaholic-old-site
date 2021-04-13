<?php
$ld = dirname(__FILE__);
$filepath = $ld . "/" . $_POST["id"];
$currentcontents = file_get_contents($filepath);
print((int)$currentcontents+1);
$txt = (int)$currentcontents+1;
file_put_contents($filepath, $txt);
?>
<?php
$ld = dirname(__FILE__);
$filepath = $ld . "/" . $_POST["id"];
$currentcontents = file_get_contents($filepath);
print($currentcontents);
?> 
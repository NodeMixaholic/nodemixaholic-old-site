<?php
$myfile = fopen("TEMPLUA", "w") or die("Unable to open file!");
$txt = $_POST["script"];
fwrite($myfile, $txt);
fclose($myfile);
header("refresh:2;url=placedebug.html");
?> 
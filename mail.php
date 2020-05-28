<?php

if(isset($_GET["submit"]))
{
   $name = $_GET["name"];	
	$subject = $_GET["subject"];
	$email = $_GET["email"];
	$message = $_GET["message"];
	
    $mailTo = "gauravkumargk9891@gmail.com";
    $headers = "From: ". $email;
		$txt = "You have reaceved an email from ". $email. "\n\n". $message;
	
	mail($mailTo, $subject, $txt, $headers);
	$msg = "<div>Sent successful</div>"



}

?>

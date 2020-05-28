<?php

if(isset($_POST["submit"]))
{
   $name = $_POST["name"];	
	$subject = $_POST["subject"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
    $mailTo = "gauravkumargk9891@gmail.com";
    $headers = "From: ". $email;
		$txt = "You have reaceved an email from ". $email. "\n\n". $message;
		
	mail($mailTo, $subject, $txt, $headers);
	$msg = "<div>Sent successful</div>"

}

?>
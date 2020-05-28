<?php

if(isset($_POST["submit"]))
{
   $name = $_POST["name"];	
	$subject = $_POST["subject"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
    $mail = "gauravkumargk9891@gmail.com";
    $headers = "From: ". $email;
		$txt = "You have reaceved an email from ". $email. "\n\n". $message;
		
	mail($mail, $subject, $txt, $headers);
	header("location: index.html?mailsuccess");

}

?>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'rbracero27@gmail.com'; 
        $mail->Password = 'gihq tfef zrwr panz'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $fullname); 
        $mail->addAddress('rbracero27@gmail.com'); 

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Message from Contact Form';
        $mail->Body    = "<strong>Full Name:</strong> $fullname<br>
                          <strong>Email:</strong> $email<br>
                          <strong>Message:</strong><br>$message";

        // Send the email
        $mail->send();

        // Redirect to index.html with success parameter
        header("Location: index.html?success=true");
        exit();
    } catch (Exception $e) {
        // Redirect to index.html with error message
        header("Location: index.html?success=false&error=" . urlencode($mail->ErrorInfo));
        exit();
    }
}
?>
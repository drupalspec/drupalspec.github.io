<?php

if(isset($_POST['email'])) {

    $email_to = "vadim.kasparov@gmail.com";
    $email_subject = "Your project name | Apply Cash now";

    function died($error) {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['postal_code']) ||
        !isset($_POST['make_car']) ||
        !isset($_POST['make_years']) ||
        !isset($_POST['miles']) ||
        !isset($_POST['sitetime'])) {

        died('We are sorry, but there appears to be a problem with the form you submitted.');

    }

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_from = $_POST['email'];
    $telephone = $_POST['telephone'];
    $postal_code = $_POST['postal_code'];
    $make_car = $_POST['make_car'];
    $make_model = $_POST['make_model'];
    $year = $_POST['make_years'];
    $miles = $_POST['miles'];
    $sitetime = $_POST['sitetime'];
    $site_url =$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email_from)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }
    $string_exp = "/^[A-Za-z .'-]+$/";

    if(!preg_match($string_exp,$first_name)) {
        $error_message .= 'The First Name you entered does not appear to be valid.<br />';
    }

    if(!preg_match($string_exp,$last_name)) {
        $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
    }

    if(strlen($error_message) > 0) {
        died($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);

    }

    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Postal code: ".clean_string($postal_code)."\n";
    $email_message .= "Make car: ".clean_string($make_car)."\n";
    $email_message .= "Make model: ".clean_string($make_model)."\n";
    $email_message .= "Year: ".clean_string($year)."\n";
    $email_message .= "Miles: ".clean_string($miles)."\n";
    $email_message .= "Time user spend: ".clean_string($sitetime)." Seconds \n";
    $email_message .= "User from page: ".clean_string($site_url)." Seconds \n";

    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    ?>


    <?php
    die();
}
?>
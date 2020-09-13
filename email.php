<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title></title>
    <!-- METATAGS -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">
    <!-- FONTS -->
    <!-- CSS -->
    <link rel="stylesheet" href="css/style_email.css">
    </head>
<body>
    <div class="gg">
        <?php
        error_reporting(0);
        ini_set(“display_errors”, 0 );

        if(isset($_POST['email']) && !empty($_POST['email'])){
            
            $nome = addslashes ($_POST['name']);
            $email = addslashes ($_POST['email']);
            $mensagem = addslashes ($_POST['message']);
            
            $to = "molmelstet2016@gmail.com";
            $subjet = "Contato Site Glads";
            $body = "Nome:".$nome."\n".
            "Email:".$email."\n".
            "Mensagem:".$mensagem;

            $header = "From:contatos@gladiators.com.br"."\r\n".
            "Reply-to:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();
            if(mail($to,$subjet,$body,$header)){    
                echo ' <div class="container"><h1>email enviado com sucesso</h1><button class="btn-home"><i class="fas fa-long-arrow-alt-left"></i> voltar para o inicio</button></div>'; 
            }
            else{
                echo ' <div class="container"><h1>ocoreu uma falha ao enviar o email</h1><a href="index.html"><button class="btn-home"><i class="fas fa-long-arrow-alt-left"></i> voltar para o inicio</button></a></div>'; 
            }
        } else{
            echo ' <div class="container"><h1>ocoreu uma falha ao enviar o email</h1><a href="index.html"><button class="btn-home"><i class="fas fa-long-arrow-alt-left"></i> voltar para o inicio</button></a></div>'; 
        }
        ?>
      
    </div>
  </a>
    <script src="https://kit.fontawesome.com/b54f068030.js" crossorigin="anonymous"></script>
</body>
</html>
    function sendMail() {
        var body = document.getElementById("comment").value;
        var subject = document.getElementById("client").value;
        var to = document.getElementById("email").value;
        window.location.href = "mailto:mail@example.com?subject="+"Mensagem de "+ subject + "&body="+ body;
    }
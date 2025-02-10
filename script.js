function sendMail() {
        let parms = {
            name : document.getElementById("fullname").value,
            email : document.getElementById("email").value,
            subject : document.getElementById("subject").value,
            message : document.getElementById("message").value,
    }

    emailjs.send("service_2rcal7k", "template_kkdmocb",parms).then(alert("Email Sent!!"))
}
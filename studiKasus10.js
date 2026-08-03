const daftarEmail = [
    { email: "charlesleclerc@example.com" },
    { email: "invalid-email" },
    { email: "spiderman@example.org" }
];

function validasiDaftarEmail(emailArray) {

    for (let i = 0; i < emailArray.length; i++) {

        if (emailArray[i].email.includes("@") && emailArray[i].email.includes(".")) {
            console.log(emailArray[i].email + " : Email Valid");
        } else {
            console.log(emailArray[i].email + " : Email Tidak Valid");
        }

    }

}

validasiDaftarEmail(daftarEmail);
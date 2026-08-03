const daftarRestoran = [
    { nama: "RM Nusantara", rating: 4.8, buka: true },
    { nama: "Ayam Geprek", rating: 4.3, buka: true },
    { nama: "Sushi House", rating: 4.2, buka: false },
    { nama: "Bakso Enak", rating: 4.6, buka: true },
    { nama: "Mie Pedas", rating: 4.4, buka: true }
];

function filterRestoranFavorit(dataRestoran) {

    for (let i = 0; i < dataRestoran.length; i++) {

        if (dataRestoran[i].rating >= 4.5 && dataRestoran[i].buka == true) {
            console.log(dataRestoran[i].nama);
        }

    }

}

filterRestoranFavorit(daftarRestoran);
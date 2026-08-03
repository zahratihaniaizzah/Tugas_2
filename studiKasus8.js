const pasien = [
    { nama: "Jean Grey", usia: 65 },
    { nama: "Mj", usia: 45 },
    { nama: "Peter Parker", usia: 15 },
    { nama: "Tony Stark", usia: 55 },
    { nama: "Steve Rogers", usia: 70 }
];

function kelompokkanAntreanPasien(dataPasien) {

    for (let i = 0; i < dataPasien.length; i++) {

        if (dataPasien[i].usia >= 60) {
            console.log(dataPasien[i].nama + " : Prioritas Lansia");
        } else {
            console.log(dataPasien[i].nama + " : Antrean Reguler");
        }

    }

}

kelompokkanAntreanPasien(pasien);
const platKendaraan = [
    "DD1234AB",
    "DD5678CD",
    "DD9013EF",
    "DD4562GH",
    "DD7895IJ"
];

function filterParkirGanjilGenap(dataPlat, tanggal) {

    let jenisTanggal;

    if (tanggal % 2 == 0) {
        jenisTanggal = "Genap";
    } else {
        jenisTanggal = "Ganjil";
    }

    console.log("Tanggal hari ini : " + tanggal);
    console.log("Jenis tanggal    : " + jenisTanggal);
    console.log("Kendaraan yang boleh masuk:");

    for (let i = 0; i < dataPlat.length; i++) {

        let angka = dataPlat[i][5];
        let jenisPlat;

        if (angka % 2 == 0) {
            jenisPlat = "Genap";
        } else {
            jenisPlat = "Ganjil";
        }

        if (jenisPlat == jenisTanggal) {
            console.log(dataPlat[i] + " (" + jenisPlat + ") boleh masuk");
        }
    }
}

filterParkirGanjilGenap(platKendaraan, 16);
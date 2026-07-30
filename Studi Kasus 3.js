let platKendaraan = [
    "DD1234AB",
    "DD5678CD",
    "DD9013EF",
    "DD4562GH",
    "DD7895IJ"
];
function filterParkirGanjilGenap(data, tanggal) {

    let jenisTanggal = (tanggal % 2 == 0) ? "Genap" : "Ganjil";

    console.log("Tanggal hari ini: " + tanggal);
    console.log("Jenis tanggal: " + jenisTanggal);

    for (let i = 0; i < data.length; i++) {

        let angka = data[i][5];
        let jenisPlat = (angka % 2 == 0) ? "Genap" : "Ganjil";

        if (jenisPlat == jenisTanggal) {
            console.log(data[i] + " boleh masuk");
        }
    }
}

filterParkirGanjilGenap(platKendaraan, 15);

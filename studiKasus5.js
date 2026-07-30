const stokBarang = [
    { namaBarang: "Laptop", jumlahStock: 8, aktif: "true" },
    { namaBarang: "Mouse", jumlahStock: 3, aktif: "true" },
    { namaBarang: "Keyboard", jumlahStock: 4, aktif: "false" }
];

function cekRestockGudang(stokBarang) {
    for (let i = 0; i < stokBarang.length; i++) {

        if (stokBarang[i].jumlahStock < 5) {
            console.log(stokBarang[i].namaBarang + " Aktif: " + stokBarang[i].aktif + "  Restock");
        } else {
            console.log(stokBarang[i].namaBarang + " Aktif: " + stokBarang[i].aktif + "  Tidak Perlu Restock");
        }

    }
}

cekRestockGudang(stokBarang);
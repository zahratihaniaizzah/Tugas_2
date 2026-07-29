const seleksiSiswa = [
    { nama:"acharles",IPK: 3.0, pendapatan: 5000000 },
    { nama: "zee", IPK: 3.5, pendapatan: 4000000 },
    { nama: "ashel", IPK: 3.6, pendapatan: 3000000 },
    { nama: "ohyul", IPK: 3.8, pendapatan: 9600000 },
    { nama: "louis", IPK: 2.9, pendapatan: 3000000 }
];  
function cekBeasiswa(dataMahasiswa) {
    for (let i = 0; i < dataMahasiswa.length; i++) {

        if (dataMahasiswa[i].IPK >= 3.5 && dataMahasiswa[i].pendapatan <= 5000000) {
            console.log(dataMahasiswa[i].nama + " : Lolos");
        } else {
            console.log(dataMahasiswa[i].nama + " : Tidak Lolos");
        }
    }  
}    
    cekBeasiswa(seleksiSiswa);
let kalori = [500, 300, 400, 200, 100];

function evaluasiAsupanKalori(dataKalori, targetKalori) {
    let totalKalori = 0;
    for (let i = 0; i < dataKalori.length; i++) {
        totalKalori += dataKalori[i];
    }
    console.log("Total Kalori: " + totalKalori);

   if (totalKalori > targetKalori) {
        console.log("Asupan kalori melebihi target.");
    } else if (totalKalori < targetKalori) {
        console.log("Asupan kalori kurang dari target.");
    } else {
        console.log("Asupan kalori pas sesuai target.");
    }
}
const targetKalori = 2200;
evaluasiAsupanKalori(kalori, targetKalori);
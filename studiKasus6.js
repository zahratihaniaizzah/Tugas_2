const jamKerjaMingguan = [8, 9, 7, 10, 6, 5, 4];

function hitungGajiMingguan(jamKerja) {
    let totalJam = 0;
    for (let i = 0; i < jamKerja.length; i++) {
        totalJam += jamKerja[i];
    }

    let gajiDasar = 0;
    let gajiLembur = 0;

    if (totalJam > 40) {
        gajiDasar = 40 * 50000;
        gajiLembur = (totalJam - 40) * 75000;
    } else {
        gajiDasar = totalJam * 50000;
    }

    return gajiDasar + gajiLembur;
}

console.log(hitungGajiMingguan(jamKerjaMingguan));  
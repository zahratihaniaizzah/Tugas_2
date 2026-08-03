const skores = [
    { nama: "Alice", skor: 950 },
    { nama: "Kimi", skor: 850 },
    { nama: "Charles", skor: 650 },
    { nama: "ashel", skor: 920 },
    { nama: "aca", skor: 750 }
];

function prosesLeaderboard(dataSkor) {

    for (let i = 0; i < dataSkor.length; i++) { 

        if (dataSkor[i].skor >= 900) {
            console.log(dataSkor[i].nama + " : Gold Tier");
        }   else if (dataSkor[i].skor >= 700 && dataSkor[i].skor < 900) {
            console.log(dataSkor[i].nama + " : Silver Tier");
        }   else {
            console.log(dataSkor[i].nama + " : Bronze Tier");
        }

    }
}

prosesLeaderboard(skores);
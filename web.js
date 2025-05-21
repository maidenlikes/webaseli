function mulaiGame() {
  const TahunBenar = 2007;
  let tryCount = 3; // 
  let JawabanBenar = false;

  for (let i = 1; i <= tryCount; i++) {
    let Jawaban = prompt(`Percobaan ke-${i}: Kapan Terakhir Kali Emyu Menang UCL CIK`);

    if (Jawaban === null) {
      alert("Kamu Karbit Banget Anjim");
      break;
    }

    let tebakan = Number(Jawaban);

    if (isNaN(tebakan)) {
      alert("Koe Gak Input Nomor Blok Ulangi!");
      break;
    }

    if (tebakan === TahunBenar) {
      alert("Fens Emyu Sejati");
      JawabanBenar = true;
      break;
    } else {
      alert("Jancok Karbit");
    }
  }
}

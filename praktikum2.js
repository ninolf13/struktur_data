let nilai = [
  [80, 75, 90],
  [85, 90, 95],
  [70, 80, 85]
];
let siswa = ['Budi', 'Ani', 'Citra'];

console.log("=== TUGAS 1: Output Kode Awal ===");
for (let b = 0; b < nilai.length; b++) {
  let total = 0;
  for (let k = 0; k < nilai[b].length; k++) {
    total = total + nilai[b][k];
  }
  let rata = total / nilai[b].length;
  console.log(siswa[b] + ': total ' + total + ', rata-rata ' + rata.toFixed(1));
}

console.log("\n=== TUGAS 2: Menambah 1 Siswa Baru (Doni) ===");
nilai.push([75, 85, 80]);
siswa.push('Doni');

for (let b = 0; b < nilai.length; b++) {
  let total = 0;
  for (let k = 0; k < nilai[b].length; k++) {
    total = total + nilai[b][k];
  }
  let rata = total / nilai[b].length;
  console.log(siswa[b] + ': total ' + total + ', rata-rata ' + rata.toFixed(1));
}

console.log("\n=== TUGAS 3: Rata-rata per Mata Pelajaran (Per Kolom) ===");
let jumlahKolom = nilai[0].length;
let jumlahBaris = nilai.length;

for (let k = 0; k < jumlahKolom; k++) {
  let totalMapel = 0;
  for (let b = 0; b < jumlahBaris; b++) {
    totalMapel += nilai[b][k];
  }
  let rataMapel = totalMapel / jumlahBaris;
  console.log('Mata Pelajaran ' + (k + 1) + ': rata-rata ' + rataMapel.toFixed(1));
}

console.log("\n=== TUGAS 4: Membaca nilai[2][1] ===");
console.log("nilai[2][1] =", nilai[2][1]);
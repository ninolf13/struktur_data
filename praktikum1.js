let nilai = [85, 90, 78, 92, 88]; 

let total = 0;
for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}

let rataRata = total / nilai.length;

let tertinggi = nilai[0];
for (let i = 1; i < nilai.length; i++) {
  if (nilai[i] > tertinggi) {
    tertinggi = nilai[i];
  }
}

let terendah = nilai[0];
for (let i = 1; i < nilai.length; i++) {
  if (nilai[i] < terendah) {
    terendah = nilai[i];
  }
}


console.log('--- HASIL TUGAS 1 ---');
console.log('Daftar Nilai:', nilai);
console.log('Total Nilai:', total);
console.log('Rata-rata Nilai:', rataRata);
console.log('Nilai Tertinggi:', tertinggi);
console.log('Nilai Terendah:', terendah);

console.log('\n'); 


let dataCampuran = ['Budi', 16, true, 3.5];

console.log('--- HASIL TUGAS 2 ---');
for (let i = 0; i < dataCampuran.length; i++) {
  console.log(dataCampuran[i] + ' -> tipe data: ' + typeof dataCampuran[i]);
}
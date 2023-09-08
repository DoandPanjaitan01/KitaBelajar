/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

// const {promisify} = require('util');
// function getProvinces(countryId, callback) {
//   setTimeout(() => {
//     if (countryId === 'id') {
//       callback(null, [
//         { id: 'id-jk', name: 'Jakarta' },
//         { id: 'id-bt', name: 'Banten' },
//         { id: 'id-jr', name: 'Jawa Barat' },
//       ]);
//       return;
//     }

//     callback(new Error('Country not found'), null);
//   }, 1000);
// }

// const getProvincesPromise = promisify(getProvinces);
// getProvincesPromise("id")
//     .then(result => console.log(result)) 
//     .catch(err => console.log(err.message));
// module.exports = { getProvinces: getProvincesPromise };


/**
 * @TODO
 * Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.
 * 1. Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek { tollRoadCard: true, balance: 0 }.
 * 2. Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek { tollRoadCard: true, balance: 10 }.
 * 3. Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.
 *
 * Catatan:
 * - Anda boleh menggunakan async/await atau .then() atau .catch() atau kombinasi keduanya.
 * - Jika ada error, tampilkan error (error.message) tersebut dengan console.log.
 * - Masing-masing langkah di atas harus dijalankan secara berurutan.
 * - Masing-masing langkah akan mencetak pesan ke console.
 * - Anda bisa mengeksplorasi fungsi yang sudah disediakan di utils.js. Namun, Anda tidak boleh mengubah isi dari utils.js.
 */

const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
    try {
        const step1 = await buyTollRoadCard(25);
        const step2 = await topUpBalance(step1, 10);
        const step3 = await useTollRoad(step2);
        }catch(error){   
            console.log(error.message);   
        }   
  return;
}

// Jangan hapus kode di bawah ini
getTollAccess();
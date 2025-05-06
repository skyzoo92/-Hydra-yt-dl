# hydra-ytdl

**hydra-ytdl** adalah library downloader YouTube berbasis Node.js yang menggunakan beberapa sumber API sekaligus, mendukung pemilihan bitrate & resolusi, serta dapat memilih API secara manual.

---

## 🏦 Instalasi

```bash
npm install hydra-ytdl
```

---

## ✨ Fitur

* Download video dan audio YouTube
* Pilih resolusi video dan bitrate audio
* Pilih sumber API secara otomatis atau manual
* Mendukung banyak fallback jika API utama gagal
* Ringan dan mudah digunakan

---

## 💼 Sumber API

| API   | Nama           | Dukungan      | Fetch? |
| ----- | -------------- | ------------- | ------ |
| API 1 | Velyn            | Audio & Video | ✅      |
| API 2 | Ryzen           | Audio & Video | ✅      |
| API 3 | Akane           | Audio & Video | ✅      |

**Catatan:**

* ✅ API 2 & API 5 langsung return URL tanpa fetch JSON (lebih cepat).
* ✅ API lainnya perlu fetch JSON untuk mendapatkan link download.

---

## 📘 Contoh Penggunaan

### Download Audio (ytmp3)

```js
const { ytmp3 } = require('hydra-ytdl');

ytpm3('https://youtube.com/watch?v=xxxxxx', '128', 'api3').then(console.log);
```

### Download Video (ytmp4)

```js
const { ytmp4 } = require('hydra-ytdl');

ytpm4('https://youtube.com/watch?v=xxxxxx', '360', 'auto').then(console.log);
```

### Get Info dari URL

```js
const { getInfo } = require('hydra-ytdl');

getInfo('https://youtube.com/watch?v=xxxxxx').then(console.log);
```

---

## ⚙️ API

### `ytmp3(url, bitrate?, api?)`

Download audio dari URL YouTube.

### `ytmp4(url, resolution?, api?)`

Download video dari URL YouTube.

### `getInfo(url)`

Ambil metadata dari URL seperti title, durasi, dan thumbnail.

---

## 🧑‍💻 Author

**Hydra**
License: [MIT](./LICENSE)
const axios = require('axios');

const apis = {
  api1: (url) => axios.get(`https://velyn.biz.id/api/downloader/ytmp4v2?url=${url}`),
  api2: (url, quality) => axios.get(`https://api.ryzumi.vip/api/downloader/ytmp4?url=${url}&quality=${quality}`),
  api3: (url, quality) => axios.get(`https://api.akane.web.id/api/downloader/youtube?url=${url}&type=video&quality=${quality}`),
};

async function ytmp4(url, quality = null, selectedApi = null) {
  try {
    if (selectedApi) {
      if (!apis[selectedApi]) throw new Error(`API "${selectedApi}" tidak ditemukan`);
      const res = quality
        ? await apis[selectedApi](url, quality)
        : await apis[selectedApi](url);
      return res.data;
    }
    const fallback = Object.keys(apis);
    for (const api of fallback) {
      try {
        const res = quality
          ? await apis[api](url, quality)
          : await apis[api](url);
        if (res.data) return res.data;
      } catch (e) {
        continue;
      }
    }

    throw new Error("Semua API gagal digunakan.");
  } catch (e) {
    throw new Error("Download gagal: " + e.message);
  }
}

module.exports = ytmp4;


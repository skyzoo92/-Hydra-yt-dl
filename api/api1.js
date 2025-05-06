const axios = require('axios');

async function downloadWithResolution(url, resolution) {
  const res = await axios.get(`https://api.ryzumi.vip/api/downloader/ytmp4?url=${url}&quality=${resolution}`);
  return res.data;
}

module.exports = { downloadWithResolution };

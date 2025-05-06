const axios = require('axios');

async function downloadWithoutResolution(url) {
  const res = await axios.get(`https://api.agatz.xyz/api/ytmp4?url=${url}`);
  return res.data;
}

module.exports = { downloadWithoutResolution };

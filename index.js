const { downloadWithResolution } = require('./api/api1.js');
const { downloadWithoutResolution } = require('./api/api2.js');

async function downloadYouTube(url, options) {
  if (typeof options === 'string') {
    return await downloadWithResolution(url, options);
  }
  return await downloadWithoutResolution(url);
}

module.exports = { downloadYouTube };
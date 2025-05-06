const yts = require('yt-search');

async function getInfo(url) {
  const videoId = extractVideoId(url);
  const result = await yts({ videoId });

  if (!result || !result.title) throw new Error("Video not found");

  return {
    title: result.title,
    duration: result.timestamp,
    seconds: result.seconds,
    thumbnail: result.image,
    url: result.url,
    channel: result.author.name,
    views: result.views,
    published: result.ago
  };
}

function extractVideoId(url) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : null;
}

module.exports = getInfo;
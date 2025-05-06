const ytSearch = require('yt-search');

async function searchYouTube(query) {
  const result = await ytSearch(query);
  return result.videos.map(v => ({
    title: v.title,
    url: v.url,
    duration: v.timestamp,
    views: v.views,
    author: v.author.name
  }));
}

module.exports = { searchYouTube };.
const {google} = require("googleapis")

class YoutubeRequest{
	async Search({q, maxResults, part, pageToken, type}){
		
		let searchRes = await google.youtube('v3').search.list({
			key: process.env.YOUTUBE_KEY,
			part: part || 'snippet',
			q: q || 'muse',
			maxResults: maxResults || 5,
			pageToken: pageToken || undefined,
			type: type || 'video'
		})

		return searchRes;
	}
}

module.exports = new YoutubeRequest();
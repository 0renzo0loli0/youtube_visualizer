const Youtube = require("./aod");

class YoutubeAPI{
	async Search(_data){
		return await Youtube.Search(_data);
	}

	async Test(_data){
		return await Youtube.Test(_data);
	}
}

module.exports = new YoutubeAPI();
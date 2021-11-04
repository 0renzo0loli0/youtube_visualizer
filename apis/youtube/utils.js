const request = require('request')

module.exports = {
	filter_searched_videos_request: (data_in) =>{
		return {
			config:{
				method: data_in.config.method,
				params: {
					...data_in.config.params,
					key: undefined
				}
			},
			data: data_in.data
		}
	}
}
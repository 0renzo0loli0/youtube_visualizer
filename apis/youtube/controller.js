var express = require('express');
var router = express.Router();

const Youtube = require("./aot");
const utils = require("./utils")

router.get("/search",async (req,res)=>{
	const {q, maxResults} = req.query;
	let response = await Youtube.Search({
		q,maxResults
	});

	res.send(utils.filter_searched_videos_request(response))
})

module.exports = router;

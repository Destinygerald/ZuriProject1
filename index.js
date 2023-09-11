const express = require('express');
const app = express();


const PORT = 8000;

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

app.use(express.json());

app.get('/zuri', (req , res) => {
	const { slack_name, track } = req.body

	if (!slack_name || !track) {
		return res.json({
			error: "No slack_name or track"
		})
	}

	let _Date = new Date(); 

	res.json({
		slack_name: slack_name,
		current_day: DAYS[_Date.getDay()],
		utc_time: _Date.toUTCString(),
		track: track,
		github_file_url: "https://github.com/destinyGerald/repo/blob/main/file.js",
		github_repo_url: "https://github.com/destinyGerald/repo",
		status_code: 200
	})
}) 


app.listen(PORT, () => {
	console.log(`Listening to Port ${PORT}`)
})
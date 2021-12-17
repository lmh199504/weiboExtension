const baseUrl = 'http://localhost:8088'


function getCookieStr() {
	chrome.cookies.getAll({
		url: "https://weibo.com/"
	}, function (res) {
		// console.log(res)
		var str = res.map(item => item.name + '=' + item.value).join(';')
		// console.log(str)
		$.ajax({
			url: baseUrl + '/extension/cookies',
			data: {
				cookies: str
			},
			type: "POST",
			success: function(res) {
				console.log(res)
			},
			fail: function(err) {
				console.log(err)
			}
		})
	})
}
getCookieStr()
setInterval(() => {
	getCookieStr()
}, 1000 * 60 * 1000)


$.ajax({
	url: "https://api.boot.jeecg.com/sys/randomImage/1639024872197?_t=1639024872",
})

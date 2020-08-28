const ghpages = require('gh-pages')
//You must add your own info and repo
ghpages.publish(
	'./dist/public/',
	{
		branch: 'master',
		repo: '<your-githubrepo.git>',
		user: {
			name: '<Your-username>',
			email: '<Your-github-emailId>',
		},
	},
	() => {
		console.log('Deploy Complete!')
	},
)

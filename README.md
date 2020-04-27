# About Me - Portfolio SPA :man_technologist:
Hi, This is the first iteration of my personal portfolio web page. The motivation behind this was to incorporate some concepts I'm learning and build a component based - swappable - single page app. 

## Getting Started
If you're interested in using or forking this project for your own personal website, I only ask you to inlcude a link in your readme to my github page. *Thanks!*

This project was created with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), [yarn](https://classic.yarnpkg.com/en/), and [axios](https://www.npmjs.com/package/axios). A full list of tech and tools is listed below. 

After cloning the github repo run

`$yarn install`

If you're running into issues, check out the dependencies. Next, you'll have to add a .env file to use the github API. 

`$touch .env`

You'll have to generate a new token from your github account and assign it to the following variable below. You never want to share your token so add the .env file to your `.gitignore` file. Check out this [link](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) on how to create a token to access the GitHub [GraphQL API](https://developer.github.com/v4/). You'll need this to connect to your repo and gain access to things like repo name, status, info etc...

Add this to your .env file: 
`REACT_APP_GITHUB_ACCESS_TOKEN=YOUR_TOKEN_GOES_HERE_123`

#### GrapQL API Call
If you plan on using - more or less - the same information in your API call, you will need to change the graphQL query in: `src/components/Projects/query.js`.  Update this line of code `user(login: "YourRepoName")`. My repo won't work for you :nerd_face:



## Built With


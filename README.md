# About Me - Portfolio SPA :man_technologist:
Hi, This is the first iteration of my personal portfolio web page. The motivation behind this was to incorporate some concepts I'm learning and build a component based - swappable - single page app. 

**[See my page live](https://bryan-phl-lnc.herokuapp.com)**

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

#### React i18next 
[About i18next](https://react.i18next.com)

This page was also built with internationalization in mind. You'll notice my page has some odd text interpolations for different web components. react-i18next helps abstract out text using different translation files. My translation files are located here: `src/i18n/locales/en.json` or `jp.json` for the Japanese translation file. They configuration falls back on `en.json` so unless you plan on changing your default language, don't delete that file - just update the content. 

#### Animation with Framer Motion

I experimented with [Framer Motion](https://www.framer.com/api/motion/) a bit to add some spicy :hot_pepper: animations. If you take a look at the `Nav.js` component you'll see some special html descriptors like `<motion.div>`. This is how framer interacts with the DOM. Varients are variables that help define the animations.

## Built With


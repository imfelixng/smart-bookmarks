# Smart Bookmarks

An easy way to find relevant bookmarks on search engines.

![Logo](/images/logo.png)

## Idea

I saved many bookmarks and reading lists before when I found them and felt it very cool. But, after a long time, they are too much and I can't control it.
So, I thought about that pretty much and finally, I have an idea to build this extension.

### How it works

When we search for a keyword on Google, we will try to look for some cool articles and blogs that match this keyword. Sometimes, it seems to exist on our bookmarks.
So I want to bring all of the relevant links to the keyword on the bookmarks on Google search results and put it to the top of results to use easy to access.

![Final results](/images/final-result.png)

Currently, for the first version I want to make it simple, so I only find the links by title. Soon, I will integrate AI tools like (ChatGPT, Poe, ...) to extract and get the most match links.

## Usage

### How to use this extension in local?

1. Clone this repository by command `git clone https://github.com/imfelixng/smart-bookmarks.git`
2. Run `yarn install` or `npm i` (check your node version >= 16)
3. Run `yarn dev` or `npm run dev`
4. Load Extension in Chrome
     - 4.1 Open - Chrome browser
     - 4.2 Access - chrome://extensions
     - 4.3 Tick - Developer mode
     - 4.4 Find - Load unpacked extension
     - 4.5 Select - dist folder in this project (after dev or build)

Notes: If you want to build in production, Just run `yarn build` or `npm run build` and load `dist` folder to the Chrome extension

### How to install it from Chrome Extension Store

Unfortunately, I don't have any plans to upload it to the store yet. But I will upload it to the store in the near future 😇.

## Contributions

Feel free to create an issue if you face a problem when using it. In addition, You can make a pull request to push your improvements, and ideas on that.

I'm very appreciative of that.

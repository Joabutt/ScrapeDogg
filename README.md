<h1 align="center">Welcome to ScrapeDogg 🐕</h1>
<p>
  <a href="https://www.npmjs.com/package/scrapedogg" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/scraper.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## About
`ScrapeDogg` is an experimental library for scraping websites using OpenAI's GPT.

The library provides a means to scrape structured data from HTML without writing page-specific code.

⚠️ "Important" ⚠️

    Before you proceed, here are at least two reasons why you should not use this library:
    
    * It is **very experimental**, no guarantees are made about the stability of the API or the accuracy of the results.

    * It relies on the OpenAI API, which is quite slow and can be expensive. 

    **Use at your own risk.**


## Quickstart

**Step 1)** Obtain an OpenAI API key (<https://platform.openai.com>) and set an environment variable in the .env file:

```bash
OPENAI_API_KEY=sk-...
```

**Step 2)** Install the library however you like:

```bash
npm install ScrapeDogg
```
or
```bash
yarn add ScrapeDogg
```

**Step3)** Initialize a URL and a Schema by indicating the data you wish to extract:

```javascript
let url = "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html";
let schema = {
  title: "string",
  book_cover: "url",
  url: "url",
  price: "string",
  stock: "int",
  rating: "int/int stars",
  description: "string",
};
```

**Step 4)** Passing the scraper a URL to the resulting scraper will return the scraped data in the console:

```javascript
(async () => {
  console.log(await scrape(url, schema))
})();
```
```json
{
    "title": "A Light in the Attic",
    "book_cover": "https://books.toscrape.com/media/cache/fe/72/fe72f0532301ec28892ae79a629a293c.jpg",
    "url": "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html",
    "price": "£51.77",
    "stock": 22,
    "rating": "3/5 stars",
    "description": "It's hard to imagine a world without A Light in the Attic. This now-classic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition. ...more"
}
```
**That's it! 🎉**

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Install

```sh
npm install ScrapeDogg
```

## Run tests

```sh
npm run test
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request 😎

## Credits

- [scrapeghost](https://jamesturk.github.io/scrapeghost/)
  - Huge Thanks to scrapeghost for inspiring me to make this idea in JS, Go check out their python version, Thanks!

## Show your support

Give a ⭐️ if this project helped you!
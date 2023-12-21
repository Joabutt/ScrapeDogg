const { scrape } = require("../src")
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
(async () => {
  console.log(await scrape(url, schema))
})();
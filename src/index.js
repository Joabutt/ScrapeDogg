require("dotenv").config();
const axios = require("axios");
const cheerio = require("cheerio");
const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });



async function scrape(url, schema) {
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  const textData = $("body")
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `When you receive invalid JSON, respond only with valid JSON matching the schema: ${JSON.stringify(schema)}`,
      },
      { role: "system", content: "Only reply with JSON, nothing else. " },
      { role: "user", content: "{'bad': 'json', }" },
      { role: "assistant", content: '{"bad": "json"}' },
      {
        role: "user",
        content: `I have this website which i want to scrape (${url}),the scraped wesite data is here: ${textData}, and i want you to return the data with the schema ${JSON.stringify(schema)}, and return the data in JSON and respond only with valid JSON matching the schema only. Strictly respond with the schema fields, DO NOT CHANGE THE SCHEMA FIELD HEADS, only fill in the corresponding data fields for the field heads. DO NOT CHANGE THE SCHEMA FIELD HEADS`,
      },
    ],
    model: "gpt-4-1106-preview",
    response_format: { type: "json_object" },
  });
  const scrapeddata = completion.choices[0].message.content
  return scrapeddata;
}

module.exports = { scrape };

const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const url = process.env.URL_API;
const key = process.env.API_KEY;

if (!url || !key) {
  throw new Error("Configure URL_API e API_KEY no arquivo .env.");
}

const supabase = createClient(url, key);

module.exports = supabase;

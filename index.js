import express from 'express';
import axios from 'axios';
import fetch from 'node-fetch';
import {
    Blob
} from 'formdata-node';
import {
    fileTypeFromBuffer
} from 'file-type';
import crypto from "crypto";
import * as cheerio from 'cheerio';
import FormData from 'form-data';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';
const userId = crypto.randomUUID();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
  "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
];
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

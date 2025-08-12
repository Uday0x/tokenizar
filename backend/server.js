// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// text -> tokens
function textToTokens(text) {
  return text.split('').map(char => char.charCodeAt(0));
}

// tokens -> text
function tokensToText(tokens) {
  const tokenArr = tokens.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  return tokenArr.map(num => String.fromCharCode(num)).join('');
}

// mapping
function getMapping(text) {
  return text.split('').map(char => ({
    char,
    ascii: char.charCodeAt(0)
  }));
}

// Tokenize endpoint ko /api/tokenize par set karo
app.post('/api/tokenize', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.json({ tokens: [], mapping: [] });
  }
  res.json({
    tokens: textToTokens(text),
    mapping: getMapping(text)
  });
});

// Detokenize endpoint ko /api/detokenize par set karo
app.post('/api/detokenize', (req, res) => {
  const { tokens } = req.body;
  if (!tokens) {
    return res.json({ text: '' });
  }
  res.json({ text: tokensToText(tokens) });
});

// Port ke liye process.env.PORT ya default 5000 ka use karo
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
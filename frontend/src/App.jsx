import React, { useState } from "react";
import "./index.css";

export default function App({ dark, setDark }) {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState("");
  const [decoded, setDecoded] = useState("");
  const [mapping, setMapping] = useState([]);

  // Use a conditional statement to set the API_URL dynamically
  const API_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "/api";

  // Tokenize function to call the backend API
  const handleTokenize = async () => {
    if (!text.trim()) return;
    try {
      const response = await fetch(`${API_URL}/tokenize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setTokens(data.tokens.join(' '));
      setMapping(data.mapping.map(m => ({
        char: m.char === " " ? "␣" : m.char, // Symbol for space
        token: m.ascii
      })));
    } catch (error) {
      console.error("Error tokenizing text:", error);
    }
  };

  // Detokenize function to call the backend API
  const handleDetokenize = async () => {
    if (!tokens.trim()) return;
    try {
      const response = await fetch(`${API_URL}/detokenize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokens }),
      });
      const data = await response.json();
      setDecoded(data.text);
    } catch (error) {
      console.error("Error detokenizing tokens:", error);
    }
  };

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen p-6`}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">Tokenizar</h1>
        <button
          onClick={() => setDark(!dark)}
          className={`px-4 py-2 rounded ${dark ? "bg-gray-700 text-white" : "bg-gray-300 text-black"}`}
        >
          {dark ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Text to Tokens Section */}
        <div className={`p-4 rounded-lg ${dark ? "bg-gray-900" : "bg-gray-100"}`}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`w-full h-32 p-2 rounded bg-transparent border-orange-500 border ${dark ? "text-white" : "text-black"}`}
            placeholder="Enter text here..."
          />
          <button
            onClick={handleTokenize}
            className="mt-3 px-4 py-2 bg-orange-500 rounded text-white"
          >
            Tokenize
          </button>
          <div className={`mt-2 p-2 rounded whitespace-pre-wrap break-words overflow-auto h-32 ${dark ? "bg-black" : "bg-white text-black"}`}>{tokens}</div>
        </div>

        {/* Tokens to Text Section */}
        <div className={`p-4 rounded-lg ${dark ? "bg-gray-900" : "bg-gray-100"}`}>
          <textarea
            value={tokens}
            onChange={(e) => setTokens(e.target.value)}
            className={`w-full h-32 p-2 rounded bg-transparent border-orange-500 border ${dark ? "text-white" : "text-black"}`}
            placeholder="Enter tokens here..."
          />
          <button
            onClick={handleDetokenize}
            className="mt-3 px-4 py-2 bg-orange-500 rounded text-white"
          >
            Detokenize
          </button>
          <div className={`mt-2 p-2 rounded whitespace-pre-wrap break-words overflow-auto h-32 ${dark ? "bg-black" : "bg-white text-black"}`}>{decoded}</div>
        </div>
      </div>

      {/* Mapping Section */}
      <div className={`mt-6 p-4 rounded-lg ${dark ? "bg-gray-900" : "bg-gray-100"}`}>
        <h2 className="text-orange-500 font-bold text-lg mb-0">Character ↔ Token Mapping</h2>
        <p className={`text-sm mb-3 ${dark ? "text-gray-400" : "text-gray-600"}`}>
          (ASCII Character Mapping)
        </p>
        <div className="flex flex-wrap gap-2">
          {mapping.map((m, idx) => (
            <div key={idx} className={`px-3 py-1 rounded ${dark ? "bg-black" : "bg-gray-200"}`}>
              <div className={`${dark ? "text-white" : "text-black"}`}>{m.char}</div>
              <div className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>{m.token}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Made with ❤️ · Backend supported
      </p>
    </div>
  );
}
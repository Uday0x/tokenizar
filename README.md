# Tokenizar App

A custom tokenizer application built with React and a Node.js/Express backend. This tool allows users to encode and decode text using ASCII character mapping. It supports special characters and provides a clear visual mapping of each character to its corresponding token.

## ✨ Features

- **Encode Text**: Converts a given string into a sequence of ASCII tokens.
- **Decode Tokens**: Converts a sequence of ASCII tokens back into the original text.
- **Real-time Mapping**: A visual grid displays the mapping of each character to its token for easy understanding.
- **Dynamic UI**: A toggleable dark/light mode for better user experience.
- **Responsive Design**: The app's layout is optimized for both desktop and mobile devices.

## 🚀 How to Run Locally

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```
2.  **Install dependencies** for both the frontend and backend:
    ```bash
    npm install
    ```
3.  **Start the backend server** in one terminal:
    ```bash
    node app.js
    ```
    You should see the message: `Backend running on port 5000`
4.  **Start the frontend development server** in a new terminal:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## 🖼️ Screenshots

### Dark Mode

### Light Mode

## 📦 API Endpoints

The backend is an Express server with two main endpoints:

-   `POST /api/tokenize`: Encodes text.
    -   **Request Body**: `{ "text": "your text here" }`
    -   **Response**: `{ "tokens": [104, 101, 108, ...], "mapping": [...] }`

-   `POST /api/detokenize`: Decodes tokens.
    -   **Request Body**: `{ "tokens": "104 101 108 108 111" }`
    -   **Response**: `{ "text": "hello" }`

## ⚙️ Technical Stack

-   **Frontend**: React, Tailwind CSS
-   **Backend**: Node.js, Express.js
-   **Deployment**: Vercel
-   **Version Control**: Git, GitHub

---

## 👨‍💻 Author

- **Your Name** - [GitHub Profile](https://github.com/your-username)
- **Email** - your-email@example.com

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
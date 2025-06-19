# AI Chat Assistant 💬

A modern, responsive AI chat application that allows users to have intelligent conversations with an AI assistant powered by Hugging Face's Mixtral model.

## 🚀 Features

- **Real-time AI Conversations**: Chat with an AI assistant powered by Mistral AI's Mixtral-8x7B-Instruct model
- **Modern UI/UX**: Beautiful, responsive design with smooth animations and transitions
- **Message History**: View your entire conversation history with timestamps
- **Loading States**: Visual feedback during AI response generation
- **Error Handling**: Graceful error handling with user-friendly messages
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clear Chat**: Option to clear conversation history

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern JavaScript library for building user interfaces
- **Axios 1.10.0** - Promise-based HTTP client for API requests
- **TailwindCSS 3.4.17** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.5.6** - Tool for transforming CSS with JavaScript
- **React Scripts 5.0.1** - Configuration and scripts for Create React App

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js 4.21.2** - Fast, unopinionated web framework for Node.js
- **Axios 1.10.0** - HTTP client for making requests to external APIs
- **CORS 2.8.5** - Cross-Origin Resource Sharing middleware
- **Dotenv 16.5.0** - Environment variable management

### AI Integration
- **Hugging Face Inference API** - Powers the AI conversations
- **Mistral AI Mixtral-8x7B-Instruct-v0.1** - Large language model for generating responses

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Hugging Face API Key** (free at [https://huggingface.co](https://huggingface.co))

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd ai-chat
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd ai-chat-backend

# Install dependencies
npm install

# Create environment file
touch .env

# Add your Hugging Face API key to .env file
echo "HF_API_KEY=your_hugging_face_api_key_here" > .env
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (from root)
cd ../ai-chat-frontend

# Install dependencies
npm install
```

### 4. Get Your Hugging Face API Key
1. Visit [Hugging Face](https://huggingface.co)
2. Create an account or sign in
3. Go to your profile settings
4. Navigate to "Access Tokens"
5. Create a new token with "Read" permissions
6. Copy the token and add it to your `.env` file in the backend directory

## 🚀 Running the Application

### Start the Backend Server
```bash
# From the ai-chat-backend directory
cd ai-chat-backend
node index.js
```
The backend server will start on `http://localhost:5001`

### Start the Frontend Application
```bash
# From the ai-chat-frontend directory (in a new terminal)
cd ai-chat-frontend
npm start
```
The frontend application will start on `http://localhost:3000`

## 📱 How to Use

1. **Open your browser** and navigate to `http://localhost:3000`
2. **Start chatting** by typing a message in the input field at the bottom
3. **Send messages** by clicking the "Send" button or pressing Enter
4. **View responses** from the AI assistant in real-time
5. **Clear chat history** using the "Clear Chat" button in the header
6. **Use Shift+Enter** for multi-line messages

### Example Conversations
- Ask questions: "What is machine learning?"
- Request explanations: "Explain quantum computing in simple terms"
- Get creative help: "Write a short story about space exploration"
- Solve problems: "How do I center a div in CSS?"

## 🎨 UI Features

- **Gradient Background**: Beautiful blue gradient background
- **Message Bubbles**: Distinct styling for user and AI messages
- **Timestamps**: Each message shows when it was sent
- **Loading Animation**: Animated dots when AI is generating response
- **Error States**: Clear error messages with visual indicators
- **Responsive Layout**: Adapts to different screen sizes
- **Accessibility**: ARIA labels and keyboard navigation support

## 🔒 Environment Variables

Create a `.env` file in the `ai-chat-backend` directory:

```env
HF_API_KEY=your_hugging_face_api_key_here
```

## 🛠️ Development

### Available Scripts (Frontend)
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

### Available Scripts (Backend)
- `node index.js` - Starts the Express server
- `npm test` - Runs tests (not implemented yet)

## 🔧 Customization

### Changing the AI Model
To use a different Hugging Face model, update the URL in `ai-chat-backend/index.js`:
```javascript
const response = await axios.post(
  'https://api-inference.huggingface.co/models/YOUR_MODEL_NAME',
  // ... rest of the configuration
);
```

### Styling Modifications
The frontend uses TailwindCSS for styling. You can modify the appearance by updating the class names in the React components or extending the Tailwind configuration in `tailwind.config.js`.

## 🐛 Troubleshooting

### Common Issues

1. **"Failed to get response from Hugging Face API"**
   - Check your API key in the `.env` file
   - Ensure your Hugging Face account has API access
   - Verify your internet connection

2. **"Network Error" or CORS issues**
   - Make sure both frontend and backend servers are running
   - Check that the backend is running on port 5001
   - Verify the API endpoint URL in the frontend

3. **App not loading**
   - Ensure all dependencies are installed (`npm install`)
   - Check that Node.js version is 14 or higher
   - Clear browser cache and try again

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues) if you want to contribute.

## 👨‍💻 Author

Built with ❤️ using modern web technologies

---

**Note**: This application requires an active internet connection to communicate with the Hugging Face API for AI responses. 
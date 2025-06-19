const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const HF_API_KEY = process.env.HF_API_KEY;

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        inputs: `<s>[INST] ${userMessage} [/INST]`,
      },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
        },
      }
    );

    const reply = response.data?.[0]?.generated_text || 'No response';
    res.json({ reply });
  } catch (error) {
    console.error('Hugging Face API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from Hugging Face API' });
  }
});

app.listen(5001, () => console.log('Server running on port 5001'));
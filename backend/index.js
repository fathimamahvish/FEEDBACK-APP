const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let feedbacks = [];

// GET all feedbacks
app.get('/api/feedbacks', (req, res) => {
  res.json(feedbacks);
});

// POST a new feedback
app.post('/api/feedbacks', (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    const newFeedback = { id: feedbacks.length + 1, name, message };
    feedbacks.push(newFeedback);
    res.status(201).json(newFeedback);
  } else {
    res.status(400).json({ error: 'Name and message are required.' });
  }
});

// DELETE a feedback by ID
app.delete('/api/feedbacks/:id', (req, res) => {
  const { id } = req.params;
  const index = feedbacks.findIndex(fb => fb.id === parseInt(id));
  if (index !== -1) {
    feedbacks.splice(index, 1);
    res.status(200).json({ message: 'Feedback deleted' });
  } else {
    res.status(404).json({ error: 'Feedback not found' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

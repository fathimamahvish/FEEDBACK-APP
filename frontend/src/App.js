import React, { useState, useEffect } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    const res = await fetch('http://localhost:5000/api/feedbacks');
    const data = await res.json();
    setFeedbacks(data);
  };

  const deleteFeedback = async (id) => {
    const res = await fetch(`http://localhost:5000/api/feedbacks/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchFeedbacks();
    } else {
      alert('Delete failed');
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="App">
      <h1>Feedback App</h1>
      <FeedbackForm onSubmitSuccess={fetchFeedbacks} />
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
    </div>
  );
}

export default App;




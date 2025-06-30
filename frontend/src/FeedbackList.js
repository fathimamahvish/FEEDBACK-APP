import React from 'react';

function FeedbackList({ feedbacks, onDelete }) {
  return (
    <div className="list">
      <h2>Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        feedbacks.map((item) => (
          <div className="feedback" key={item.id}>
            <strong>{item.name}</strong>
            <p>{item.message}</p>
            <button className="delete-btn" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;



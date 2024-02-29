
import React, { useEffect, useState } from 'react';
import './Feedback.css'

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch('http://localhost:4000/allfeedback');
        const data = await response.json();
        setFeedbackData(data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div className='feedbackview'>
      <h1>All Feedback</h1>
      {loading ? (
        <p>Loading feedback data...</p>
      ) : (
        <ul>
          {feedbackData.map((feedback, index) => (
            <li key={index}>
              <p>Name: {feedback.name}</p>
              <p>Email: {feedback.email}</p>
              <p>Rating: {feedback.rating}</p>
              <p>Comment: {feedback.comment}</p>
              <p>Date: {new Date(feedback.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Feedback;

import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, rating, comment }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setShowModal(true);
        console.log('Feedback submitted successfully');
        // Clear the form after submission
        setName('');
        setEmail('');
        setRating(0);
        setComment('');
      } else {
        console.error('Error submitting feedback:', result.error);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  const handleCloseModal = () => {
    // Hide the modal
    setShowModal(false);
    // Redirect to the homepage
    window.location.href = '/';
  };

  return (
    <div className='feedback'>
      <h2>Feedback</h2>
      <div className='input-container'>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
          placeholder='Your Name'
        />
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Your Email'
        />
      </div>
      <div className='rating-container'>
        <p>Rate your experience:</p>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={value <= rating ? 'active' : ''}
              onClick={() => handleRatingChange(value)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div className='comment-container'>
        <p>Leave a comment:</p>
        <textarea
          rows='4'
          value={comment}
          onChange={handleCommentChange}
          placeholder='Tell us about your experience...'
        />
      </div>
      <button onClick={handleSubmit}>Submit Feedback</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Thank you for your feedback!</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;

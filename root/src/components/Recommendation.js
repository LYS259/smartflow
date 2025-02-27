import React, { useState, useEffect } from 'react';

function Recommendation() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch('/api/recommendations')
      .then(res => res.json())
      .then(data => setRecommendations(data));
  }, []);

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendation;

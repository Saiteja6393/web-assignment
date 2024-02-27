import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // or any other country
            apiKey: 'a54c1f5e65fe4efd90e843651affe64b',
          },
        });
        setHeadlines(response.data.articles);
      } catch (error) {
        setError('Failed to fetch headlines. Please try again later.');
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div>
      <h2 className='heading'>Latest Headlines</h2>
      {error && <p>{error}</p>}
      <ul>
        {headlines.map((article, index) => (
          <li key={index}>
           <div className='headline'><h3>{article.title}</h3>
            <p>Source: {article.source.name}</p>
            <p>Published At: {article.publishedAt}</p></div> 
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;

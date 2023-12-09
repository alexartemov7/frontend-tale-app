import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StoryList.css';

const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Added useNavigate

  useEffect(() => {
    const fetchStories = async () => {
      try {
        let url = 'http://localhost:8080/stories';
        if (selectedGenre !== 'all') {
          url += `/genre/${selectedGenre}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
    
        setStories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [selectedGenre]);

  const handleStoryClick = (storyId) => {
    console.log('Story ID:', storyId); // Debug: Check if the ID is valid
    if (storyId) {
      navigate(`/chapters/${storyId}`);
    } else {
      console.error('Story ID is undefined');
    }
  };
  
  // Genre buttons
  const genres = ['Adventure', 'Horror', 'Sci-Fi', 'all']; // Add more genres as needed

  if (loading) {
    return <div>Loading stories...</div>;
  }

  if (error) {
    return <div>Error loading stories: {error}</div>;
  }

  return (
    <div>
      <h1>Stories</h1>
      {genres.map((genre) => (
        <button key={genre} onClick={() => setSelectedGenre(genre)} className='genre-button'>
          {genre}
        </button>
      ))}

      {stories.map((story, index) => {
        console.log(story._id)
        return (
          <div key={index} className="story-card" onClick={() => handleStoryClick(story._id)}>
          <img src={story.illustration} alt={story.title} className="story-img"/>
          <h2 className="story-title">{story.title}</h2>
          <p className="story-description">{story.description}</p>
        </div>
      )})}
    </div>
  );
};

export default StoryList;

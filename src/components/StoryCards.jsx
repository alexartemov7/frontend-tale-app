import { useState, useEffect } from 'react';

const StoryCards = ({ genre }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/stories/genre/Sci-Fi`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [genre]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {stories.map((story) => (
        <div key={story._id}>
          <h3>{story.title}</h3>
          <p>{story.description}</p>
          <div>
            {story.authors.map((author, index) => (
              <div key={index}>
                <img src={author.profilePicture} alt={author.username} style={{ width: '50px', height: '50px' }} />
                <p>{author.username}</p>
              </div>
            ))}
          </div>
          {/* Additional story details here */}
        </div>
      ))}
    </div>
  );
};

export default StoryCards;

import { useState, useEffect } from 'react';

const StoryChaptersById = ({ storyId }) => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/stories/${storyId}/chapters`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setChapters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (storyId) {
      fetchChapters();
    }
  }, [storyId]);

  if (loading) {
    return <div>Loading chapters...</div>;
  }

  if (error) {
    return <div>Error loading chapters: {error}</div>;
  }

  return (
    <div>
      <h2>Chapters</h2>
      {chapters.length > 0 ? (
        chapters.map((chapter, index) => (
          <div key={index}>
            <h3>{chapter.title}</h3>
            <p>{chapter.description}</p>
            <div>{chapter.content}</div>
            {/* Additional chapter details can be rendered here */}
          </div>
        ))
      ) : (
        <p>No chapters found for this story.</p>
      )}
    </div>
  );
};

export default StoryChaptersById;

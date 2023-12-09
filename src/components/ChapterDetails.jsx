import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChapterDetails = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { storyId } = useParams(); // Get storyId from URL parameters

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(`http://localhost:8080/stories/${storyId}/chapters`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChapters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, [storyId]);

  if (loading) return <div>Loading chapters...</div>;
  if (error) return <div>Error loading chapters: {error}</div>;


  return (
    <div>
      <h1>Chapters</h1>
      {chapters.map((chapter, index) => (
        <div key={index}>
          <h2>{chapter.title}</h2>
          <p>{chapter.description}</p>
          <div>{chapter.content}</div>
        </div>
      ))}
    </div>
  );
};

export default ChapterDetails;



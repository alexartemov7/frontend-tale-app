import React from 'react';

const ChapterDetails = ({ chapters }) => {
  if (!chapters || chapters.length === 0) return <div>No chapters available.</div>;

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

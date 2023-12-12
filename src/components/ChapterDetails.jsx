import React from 'react';
import './ChapterDetails.css';

const ChapterDetails = ({ chapters }) => {
  if (!chapters || chapters.length === 0) return <div>No chapters available.</div>;

  return (
    <div className="chapterContainer">
      <h1 className="containerHeading">Chapters</h1>
      {chapters.map((chapter, index) => (
        <div key={index}>
          <img src={chapter.illustration} alt={chapter.title} className="chapterImg"/>
          <h2 className="chapterTitle">{chapter.title}</h2>
          <p className="chapterDescription">{chapter.description}</p>
          <div className="chapterContent">{chapter.content}</div>
        </div>
      ))}
    </div>
  );
};

export default ChapterDetails;

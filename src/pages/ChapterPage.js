import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChapterDetails from "../components/ChapterDetails";
import ChapterSubmit from "../components/AddChapter"; 

export default function ShowChapters() {
    const [chapters, setChapters] = useState([]);
    const { storyId } = useParams(); // Assuming storyId is part of the URL

    const fetchChapters = async () => {
        try {
            const response = await fetch(`http://localhost:8080/stories/${storyId}/chapters`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setChapters(data);
        } catch (error) {
            console.error('Error fetching chapters:', error);
            // Handle error (e.g., set an error state)
        }
    };

    useEffect(() => {
        fetchChapters();
    }, [storyId]);

    return (
        <>
            <ChapterDetails chapters={chapters} />
            <ChapterSubmit storyId={storyId} onChapterAdded={fetchChapters} />
        </>
    );
}

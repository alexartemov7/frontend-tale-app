import React, { useState } from 'react';
import './FormStyles.css';

export default function ChapterSubmit({ storyId, onChapterAdded }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataObj = { title, description, content };
    
        try {
            const response = await fetch(`http://localhost:8080/stories/chapters/${storyId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObj)
            });
    
            if (response.ok) {
                console.log("Chapter added successfully");
                onChapterAdded(); // Trigger refetch in parent component
                // Reset form fields
                setTitle('');
                setDescription('');
                setContent('');
            } else {
                console.error("Error adding chapter");
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Chapter title: 
                <input 
                    name="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </label>
            <br />
            <label>
                Chapter description: 
                <input 
                    name="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </label>
            <br />
            <label>
                Chapter content:
                <textarea 
                    name="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    rows={4} 
                    cols={40} 
                />
            </label>
            <hr />
            <button type="submit">Add Chapter</button>
        </form>
    );
}

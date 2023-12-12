import React, { useState } from 'react';
import './FormStyles.css';

export default function ChapterSubmit({ storyId, onChapterAdded }) {
    const [title, setTitle] = useState('Chapter 4. The Vault Unveiled');
    const [description, setDescription] = useState("In the labyrinth, the warriors' collective skills unlock the Vault, revealing unimaginable technological wonders and wisdom.");
    const [content, setContent] = useState("In the labyrinth's complex network of tunnels, puzzles and traps tested the warriors' combined expertise in physics, engineering, and biology. A sudden collapse divided the group, with half, including Lucas and Zara, trapped on the other side. Those trapped bravely urged the others to continue, sacrificing their chance to reach the Vault for the greater good. The remaining warriors, driven by the sacrifice of their comrades, solved a final puzzle in a room filled with technological blueprints, unlocking the Vault of Absolute Knowledge. Inside, they discovered a chamber lined with ancient scrolls, books, and data crystals, containing the collective wisdom of ages.At the center was a glowing orb, a repository of endless knowledge. The quest had united them, teaching that the journey was as significant as the destination. The Vault, now open, heralded a new era where past wisdom and future technology merged, a legacy shaped by the courage and intellect of the thirteen warriors.");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataObj = { title, description, content };
    
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/stories/chapters/${storyId}`, {
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
        Title: 
        <textarea
            className="textarea-title"  // Assign a class name
            name="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
        />
    </label>
    <br />
    <label>
        Description: 
        <textarea 
            className="textarea-description"  // Assign a different class name
            name="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
        />
    </label>
    <br />
    <label>
        Content:
        <textarea 
            className="textarea-content"  // Assign a class for content textarea
            name="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            rows={100} 
            cols={1000} 
        />
    </label>
    <hr />
    <button type="submit">Add Chapter</button>
</form>

    );
}

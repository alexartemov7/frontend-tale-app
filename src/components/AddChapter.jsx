import React from 'react';
import { useParams } from 'react-router-dom';

export default function ChapterSubmit() {
    const { storyId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
    
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
                Chapter title: <input name="title" defaultValue="" />
            </label>
            <br />
            <label>
                Chapter description: <input name="description" defaultValue="" />
            </label>
            <br />
            <label>
                Chapter content:
                <textarea name="content" defaultValue="" rows={4} cols={40} />
            </label>
            <hr />
            <button type="submit">Save post</button>
        </form>
    );
}

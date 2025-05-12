'use client';
import React, { useEffect, useState } from 'react';

const BlogEditor = () => {
  const [blogs, setBlogs] = useState([]);
  const [sha, setSha] = useState('');
  const [newBlog, setNewBlog] = useState({ title: '', content: '', image: '', slug: '' });

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/getBlogs');
      const data = await res.json();

      const ghMetaRes = await fetch(`https://api.github.com/repos/your-username/your-repo/contents/data/blogs.json`, {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}` },
      });
      const meta = await ghMetaRes.json();
      setSha(meta.sha);

      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleChange = (e) => setNewBlog({ ...newBlog, [e.target.name]: e.target.value });

  const addBlog = () => {
    const updatedBlogs = [...blogs, { ...newBlog, id: Date.now() }];
    setBlogs(updatedBlogs);
    setNewBlog({ title: '', content: '', image: '', slug: '' });
  };

  const saveBlogs = async () => {
    const res = await fetch('/api/updateBlogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: blogs, sha }),
    });

    const result = await res.json();
    if (result.success) alert('Blogs updated on GitHub!');
    else alert('Failed to update.');
  };

  return (
    <div>
      <h1>Manage Blogs</h1>
      <input type="text" name="title" value={newBlog.title} onChange={handleChange} placeholder="Title" />
      <input type="text" name="slug" value={newBlog.slug} onChange={handleChange} placeholder="Slug" />
      <input type="text" name="image" value={newBlog.image} onChange={handleChange} placeholder="Image URL" />
      <textarea name="content" value={newBlog.content} onChange={handleChange} placeholder="Content"></textarea>
      <button onClick={addBlog}>Add</button>
      <button onClick={saveBlogs}>Save to GitHub</button>

      <div style={{ marginTop: '2rem' }}>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogEditor;

// PostPage.js
import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { useContext } from 'react';
import api from './api/posts';
import DataContext from './context/DataContext';

function PostPage() {
  const {posts,setPosts,navigate} = useContext(DataContext);
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);


  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to= {`/edit/${post.id}`}><button className='editButtom'>Edit Post</button></Link>
            <button onClick={() => handleDelete(post.id)} >
              Delete Post
            </button>
          </>
        }
        {!post && 
          <>
            <h2>Post not found</h2>
            <p><Link to='/'>Visit Home</Link></p>
          </>
        }
      </article>
    </main>
  );
}

export default PostPage;

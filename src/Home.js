import React from 'react'
import Feed from './Feed'
import { useContext } from 'react';
import DataContext from './context/DataContext';

function Home() {
  const {searchResults,fetchError,isLoading} = useContext(DataContext);
  return (
    // <main className='Home'>
    //     {posts.length ? (
    //       <Feed posts={posts}/>
    //     ):(
    //       <p style={{marginTop: "2rem"}}>No posts to display.</p>
    //     )
    //     }
    // </main>
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts...</p>}
      {!isLoading&&fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}
      {!fetchError&&!isLoading&& (searchResults.length ? (
          <Feed posts={searchResults}/>
        ):(
          <p style={{marginTop: "2rem"}}>No posts to display.</p>
        ))}
    </main>
  )
}

export default Home
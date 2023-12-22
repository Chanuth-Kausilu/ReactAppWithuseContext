import React from 'react'
import { Link } from 'react-router-dom'

function Missing() {
  return (
    <main className='Missing'>
      <h2>Post not found</h2>
      <p><Link to='/'>Visit Homes</Link></p>
    </main>
  )
}

export default Missing
import React from 'react'
import VideoList from '../components/VideoList'

export const HomePage = () => {
  return (
    <div className="container">
        <div className="navbar">
            <h1 className="logo">Tokopedia Play</h1>
        </div>
        <VideoList />
    </div>
  )
}

export default HomePage;

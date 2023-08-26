import React from 'react'
import Courausal from './Courausal'
import Trending from './Trending'
import Explore from './Explore'

function Home() {
    return (
        <div id='home' style={{width:"100%",overflowX:"hidden"}}>
            <br />
            <Courausal />
            <Trending />
            <br />
            <Explore />
            <br />
        </div>
    )
}

export default Home

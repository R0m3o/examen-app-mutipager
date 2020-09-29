import React from 'react'
import CarouselComponent from './Carousel'
import MostRecent from './MostRecent'
import NewsLetter from './NewsLetter';
import WeCreate from './WeCreate';

function Home() {
    return (
        <div>
            <CarouselComponent/>
            <WeCreate/>
            <NewsLetter/>
            <MostRecent/>
        </div>
    )
}

export default Home;
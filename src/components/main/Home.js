import React from 'react'
import CarouselComponent from './Carousel'
import MostRecent from './MostRecent'
import NewsLetter from './NewsLetter';
import WeCreate from './WeCreate';

function Home() {
    return (
        <section>
            <CarouselComponent/>
            <WeCreate/>
            <NewsLetter/>
            <MostRecent/>
        </section>
    )
}

export default Home;
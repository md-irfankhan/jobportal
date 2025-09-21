import React from 'react';
import Banner from './Banner/Banner';
import CardSection from './CardSection/CardSection';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <section>
                <CardSection></CardSection>
            </section>
        </div>
    );
};

export default Home;
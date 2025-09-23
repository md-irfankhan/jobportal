'use client'
import React, { Suspense, use } from 'react';
import Banner from './Banner/Banner';
import CardSection from './CardSection/CardSection';
const fetchCards = async () => {
  const res = await fetch('http://localhost:3000/jobs');
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

const Home = () => {
     
    
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <section>
                <Suspense fallback={'loading...'}>
                     <CardSection fetchCards={fetchCards()}></CardSection>

                </Suspense>
               
            </section>
        </div>
    );
};

export default Home;
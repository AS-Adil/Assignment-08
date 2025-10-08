import React from 'react';
import useAppsdata from '../hooks/useAppsdata';
import Banner from '../Components/Banner';
import StatesSection from '../Components/StatesSection';

const Home = () => {

    const {apps} = useAppsdata()
    console.log(apps);


    

    return (
        <div className='bg-[#E9E9E9]'>
            <Banner></Banner>
            <StatesSection></StatesSection>



        </div>
    );
};

export default Home;
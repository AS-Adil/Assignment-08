import React from 'react';
import useAppsdata from '../hooks/useAppsdata';
import Card from './Card';

const AppsContent = () => {

    const {apps} = useAppsdata()


    return (
        <div>
            





            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8'>
                {
                    apps.map(app =><Card key={app.id} app={app}></Card>)
                }
            </div>

        </div>
    );
};

export default AppsContent;
import React from 'react';
import Card from './Card';

const AppsContent = ({searchedApps}) => {




    return (
        <div>
            





            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8'>
                {
                    searchedApps.map(app =><Card key={app.id} app={app}></Card>)
                }
            </div>

        </div>
    );
};

export default AppsContent;
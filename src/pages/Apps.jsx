
import { useState } from 'react';
import AppsContent from '../Components/AppsContent';
import useAppsdata from '../hooks/useAppsdata';
import NoAppsFound from '../Components/NoAppsFound';

const Apps = () => {

    const {apps} = useAppsdata()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = search ? apps.filter(ap=>ap.title.toLocaleLowerCase().includes(term)) : apps;

    console.log(search);

    return (
        <div className="px-2 sm:px-4 lg:px-16 bg-[#E9E9E9]">

                       <div className='text-center pt-17 pb-8 space-y-3'>
        <h1 className='text-4xl font-bold '>Our All Applications</h1>
        <p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>

            </div>


                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between py-5 items-center'>
                <div className='text-xl font-semibold '>
                    <h1>({searchedApps.length})<span className='ml-1.5'>Apps found</span></h1>
                </div>


                <div>
                    <label className="floating-label">
                    <input type="search"
                    onChange={e =>setSearch(e.target.value) }
                    placeholder="Search" className="input input-md" />
                    <span>Search</span>
                    </label>
                </div>
            </div>


        {
            searchedApps.length===0 ? <NoAppsFound></NoAppsFound> : <AppsContent searchedApps={searchedApps}></AppsContent>
        }

            


        </div>
    );
};

export default Apps;
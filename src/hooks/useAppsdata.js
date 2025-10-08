import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAppsdata = () => {


    const [apps, SetApps] = useState([])
    const [loading, SetLoading] = useState(true)
    const [erro, setError] = useState(null)

    useEffect(()=>{

        SetLoading(true)
        axios('../appsData.json').then(data=>SetApps(data.data))
        .catch(err =>setError(err))
        .finally(SetLoading(false))

    }, [])
    
    return {apps, loading, erro}

};

export default useAppsdata;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAppsdata = () => {


    const [apps, SetApps] = useState([])
    const [loading, SetLoading] = useState(true)
    const [erro, setError] = useState(null)

    useEffect(()=>{

        SetLoading(true)
        axios()



    }, [])


};

export default useAppsdata;
//get
export const getStoredApp = () =>{
 
    try{
        const data = localStorage.getItem('installed')
        return data ? JSON.parse(data) : []
    }catch(err) {
        console.log(err);
        return []

    }

}


//save 
export const updateStoredApp = app =>{

    const storedApp = getStoredApp()

    try {
        const isAvilable = storedApp.some(p => p.id ===app.id)
        if(isAvilable){
            return alert('ase')
            
        } else{
            const updatedStoredList = [...storedApp,app]
            localStorage.setItem('installed', JSON.stringify(updatedStoredList))
        }

    }catch(err) {
            console.log(err);
    }

}


//delet 
 export const removeFromStorage = id =>{
    const storedApp = getStoredApp()

    try{
        const updatedStoredList = storedApp.filter(p => p.id !==id)
        localStorage.setItem('installed', JSON.stringify(updatedStoredList))
    }catch(err){
        console.log(err);
    }

 }


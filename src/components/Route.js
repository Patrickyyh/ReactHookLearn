import React , {useState,useEffect}from 'react';

const Route = ({path,children}) =>{
    const [currentPath, setCurrentPath] = useState(window.location.pathname); 

     // useEffect to listen the event
    useEffect(() => {
        const onLocationChange = () =>{
           setCurrentPath(window.location.pathname); 
        };
    
        window.addEventListener('popstate', onLocationChange); 

        // when the component is removed from dom, the clean function will be called
        // So we can make use of clean function to cancel the event listener 

        return () =>{
            window.removeEventListener('popstate'. onLocationChange);

        }


    }, [])




    return currentPath === path ? children : null; 
};


export default Route; 

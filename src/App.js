import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: "what is react ?",
        content: "react is a front end javascript framework"
    },
    
    {
        title: "Why use React?",
        content: 'React is a favourite JS libarary among engineers'
    },

    {
        title: "How do you use React ? ",
        content: "You use React by creating components"
    }


];


const App = () =>{

    return(
         <div>
            <Accordion items = {items}/>
         </div>

    );

}

export default App;
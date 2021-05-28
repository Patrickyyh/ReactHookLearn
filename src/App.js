import React ,{useState}from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


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



const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },

    {
        label: 'The color Green',
        value: 'green'
    },
        
    {
        label: 'A shade of Blue',
        value: 'blue'
    }

];



const App = () =>{
   



    return(
         <div>
            <Translate />
          
         </div>

    );

}

export default App;
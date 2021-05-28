import React , {useState}from 'react'; 
import Dropdown from './Dropdown';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },

    {
        label: 'Arabic',
        value: 'ar',

    },

    {
        label: 'Hindi',
        value: 'hi',
    },

    {
        label: 'Dutch',
        value: 'nl', 
    }
];


const Translate = () =>{

    const [language,setLanguage] = useState(options[0]); 
    const [text, setText] = useState(''); 
    
    return <div>
        <div className = "ui form">
            <div className = "field">
             <label>Enter text</label>
              <input value = {text} onChange = {(e)=>setText(e.target.value)}/>
            </div>   
        </div>
       
        <Dropdown label = "Selected Language" options = {options} selected = {language} onSelectedChange = {setLanguage}/> 
    </div>


}

export default Translate ; 


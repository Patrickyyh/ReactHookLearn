import react ,{useState ,useEffect}from 'react';
import axios from 'axios';
import { async, timeout } from 'q';
import Search from './Search';

const Convert  =  ({language, text}) =>{
    
       const [translated, setTranslated] =useState('') ; 
       const [debouncedText, setDebouncdeText] = useState(text); 
       
       useEffect(()=>{
            
           const timeoutId = setTimeout(() =>{
                  setDebouncdeText(text);
            },500); 


            return ()=>{
                clearTimeout(timeoutId); 
            }; 

       },[text]);


       useEffect(()=>{
        const doTranslation =  async ()=>{
          const {data} =  await axios.post('https://translation.googleapis.com/language/translate/v2'
            ,{} ,
            {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                },
             }
            ); 

            setTranslated(data.data.translations[0].translatedText); 
        }; 

         
        doTranslation(); 


       },[language,debouncedText]);


        return (
            <div>
                <h1 className = "ui header">{translated}</h1>
            </div>

        );


};

export default Convert; 



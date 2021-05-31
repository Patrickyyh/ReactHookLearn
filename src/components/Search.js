import React , {useState, useEffect} from 'react';
import axios from 'axios'; 


/*Search component*/
const Search = ()=>{
   const [term,setTerm] =  useState('');
   const [result, setResult] = useState([]); 
   
   console.log(result); 

   useEffect(()=>{
       
   const search = async()=>{
        
         const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
         {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term,
           
            }
         }); 

         setResult(data.query.search); 

     };
     
     if(term && !result.length){
         search(); 
     }else{
        const timeoutId = setTimeout(()=>{
            if(term){
                // set the time out 
                search();
                
            }
    
         },1000); 
    
         return () => {
             // cancel the time out 
             // return functio will be called when useState function is called next time 
            clearTimeout(timeoutId); 
         }

     }

     
 },[term]);


   const renderedResult = result.map(
       (result)=>{
           return(
               <div key = {result.pageid} className = "item">
                   <div className = "right floated content">
                        <a className = "ui button" href = {'https://en.wikipedia.org/wiki/'+result.title}> Go </a>
                   </div>


                   <div className = "content">
                       <div className = "header">
                           {result.title}
                       </div>
                       <span dangerouslySetInnerHTML = {{ __html: result.snippet }}></span>
                   </div>
               </div>
           );
       }
   ); 


    return(
        <div>
          <div className = "search-bar ui segment">
            <form className = "ui form">
                <div className = "field">
                  <label>Enter the search term</label>
                  <input type="text" value = {term} onChange = {e => setTerm(e.target.value)}  placeholder="Search..."/>
                </div>

            </form>
           </div>

           <div>
              <div className = "ui celled list">
                {renderedResult}
              </div>
           </div>
        </div>



    );

}


export default Search; 

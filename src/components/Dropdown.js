import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({options,  selected, onSelectedChange}) =>{
    /*
     keep track of whether or not the component is open at any given time 
    */
    const [open,setOpen] = useState(false); 
    const ref = useRef(); 
 
    useEffect(()=>{
        document.body.addEventListener('click', (event)=>{
            console.log(ref.current); 
            if(ref.current.contains(event.target)){
                return ; 
            }
            setOpen(false);},{capture: true}); 
    },[]); 



    const renderOptions = options.map((option => {
        

        if(option === selected){
            return null ; 
        }
         return (
            <div key = {option.value} className = "item" onClick = {()=>onSelectedChange(option)}>
                {option.label}
            </div>

         ) ;
    }));


    return (
        <div  ref = {ref} className = "ui form">
            <div className = "field">
                <label className = "label">Select a Color</label>
                <div onClick = {() =>setOpen(!open)} className ={`ui selection dropdown ${open ? 'visible active' : ''}`} >
                    <i className = "dropdown icon"></i>
                    <div className = "text">{selected.label}</div>
                    <div className = {`menu ${open ? 'visible transition' : ''}`}>
                    {renderOptions}
                    </div>
                </div>

            </div>

        </div>

    );
};


export default Dropdown; 

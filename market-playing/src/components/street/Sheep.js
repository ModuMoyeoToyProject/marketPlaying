import { useState, useEffect } from 'react'; 
// import kirby from '../../img/sheep_1';
 

const Sheep = props => { 
   const [status,setStatus] = useState("wait");
   const [sheepGrowNo,setSheepGrowNo] = useState(3);

   const [sheepName,setSheepName] = useState("");

   const sheepClick = (e) => {
      console.log("fff",e);
      if(status == "wait"){ 
         setStatus("shearing"); 
      } else if(status == "shearing"){
         setStatus("grown");          
      } else if(status == "grown"){
         setStatus("wait");       
      }  
   }

   useEffect(() => { 
      if(status == "shearing"){
         setSheepGrowNo(1);
      } else if(status == "grown"){
         setSheepGrowNo(2); 
      } else if(status == "wait"){
         setSheepGrowNo(3); 
      } 
   }, [status]); 

   return (
      <> 
      {/* <div onclick={sheepClick}> */}
      {/* <div onclick={()=>{sheepClick()}}> */}
         <img className="sheep" id={props.sheepNm}
            src={require('../../img/sheep_'+sheepGrowNo+'.png')} 
            onMouseUp={sheepClick}
         /> 
      {/* </div>  */}
      {/* <img src={require('../../img/kirby.gif')}/> */}
      </>
   );
};

export default Sheep;

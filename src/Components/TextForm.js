  import React from 'react'
  import  {useState,useEffect} from 'react';
  import { Remarkable } from 'remarkable';
  import styled from 'styled-components';
   


   
  

 
  
  const Info = styled.div`
  width: 100%;
  color: black;
  height: 1.2em;
  font-weight: 700;
  padding: 5px;
  background-color: #fff;
  text-align: end;
  color: #a334cc;
  font-family: roboto;
  font-size: 15px;
  margin-top: 100px;
  margin-bottom: 0px;
  top: 80px;
  
  `
  const initialState = `
  # Heading1
  ## Heading2
  - list item 1
  - list item 2
  - list item 3
  
  
  [Visit GLUG Official website](https://nitdgplug.org/)

  ### block of code
  \`\`\`
  let x= 1;
  let y= 2;
  \`\`\`
  ***
  *Welcome*
  ![GLUG](https://img1.pnghut.com/t/25/23/10/AyxZpuifSG/penguin-ducks-geese-and-swans-linux-logical-volume-manager-flightless-bird.jpg)
  
  `;


  const md= new Remarkable ()
  function TextForm(props) {
    const{handleLogout}=props;
    
    const [text, setText] = useState(initialState);
    const handleTextChange = (e)=>{
      setText(e.target.value)
    }
  
    
    return (
      
        <>
        <div className='entity'>    
       
     
    <div className='header'>
      <div className='headertext'>Markdown </div>
      <button className='button1'onClick={handleLogout}>Logout</button>
      </div>   
    <Info>
      {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters
      {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read
      </Info>
     <div className='main'>           
    <div className='complete'>
    <div className='container1'>
    <div className='markdownheader'>Markdown Text</div>
     <textarea name='textarea' 
               label='markdown' 
               id='markdown'  
               placeholder='Type some text here' 
               value={text} 
               onChange={handleTextChange}
    ></textarea>
         </div>
        
        <div className='container2'>        
         <div className='previewheader'>Preview</div>
       <div className="output1" dangerouslySetInnerHTML={{__html:md.render(text)}}></div>
       
       </div>
       </div>
   
       
       </div> 
       </div>
       </>
   
     
    )
  }
  
  export default TextForm
  
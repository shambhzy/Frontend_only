import React, { useState } from 'react'
import './Dalle.css'
import InputBox from './InputBox'
import { Configuration,OpenAIApi } from 'openai';


const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
    organization: "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"
});

const openai = new OpenAIApi(configuration);




function Dalle() {
  const[userPrompt,setUserPrompt] = useState("");
  const [number,setNumber] = useState(1);
  const [size,setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");


  const generateImage = async() =>{
    const imageParameters = {
      prompt: userPrompt,
      n : parseInt (number),
      size: size,
    }

    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setImageUrl(urlData);

  };


  return (
    <main className='dl'>
        {imageUrl && <img src={imageUrl} className="image" alt='ai_image'/>}

        <InputBox label={"Enter What You want to see"} setAttribute={setUserPrompt} />
        <InputBox label={"Amount"} setAttribute={setNumber} />
        <InputBox label={"Size"} setAttribute={setSize} />
       
        <button className='main-button' onClick={() => generateImage()} >Generate</button>
    
    </main>
    
  );
}

export default Dalle
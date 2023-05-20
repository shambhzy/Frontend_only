import React, { useState } from 'react'
import './Dalle.css'
import InputBox from './InputBox'
import { Configuration,OpenAIApi } from "openai";



// const configuration = new Configuration({
//     apiKey: process.env.VITE_Open_AI_Key,
//     organization: "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"
// });

// const openai = new OpenAIApi(configuration);




// function Dalle() {
//   const[userPrompt,setUserPrompt] = useState("");
//   const [number,setNumber] = useState(1);
//   const [size,setSize] = useState("256x256");
//   const [imageUrl, setImageUrl] = useState("");


//   const generateImage = async() =>{
//     const imageParameters = {
//       prompt: userPrompt,
//       n : parseInt (number),
//       size: size,
//     }

//     const response = await openai.createImage(imageParameters);
//     const urlData = response.data.data[0].url;
//     setImageUrl(urlData);

//   };


//   return (
//     <main className='dl'>
//         {imageUrl && <img src={imageUrl} className="image" alt='ai_image'/>}

//         <InputBox label={"Enter What You want to see"} setAttribute={setUserPrompt} />
//         <InputBox label={"Amount"} setAttribute={setNumber} />
//         <InputBox label={"Size"} setAttribute={setSize} />
       
//         <button className='main-button' onClick={() => generateImage()} >Generate</button>
    
//     </main>
    
//   );
// }

// export default Dalle



function Dalle () {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")

  const configuration = new Configuration({
    apiKey: process.env.VITE_Open_AI_Key,
    organization: "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"
  })

  const openai = new OpenAIApi(configuration);
  
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size : "512x512"
    })
    setResult(res.data.data[0].url)
  }

  return (
    <div>
      <h2 className='generate'>Generate AI images please</h2>
      
     
      <textarea className='inp' placeholder='lets generate AI'
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/* <InputBox 
      label={"Enter What You want to see"} 
        onChange = {(e) => setPrompt(e.target.value)}
      /> */}

      <button className='btt' onClick={generateImage}>Generate an Image</button>

      <hr/>

      {result.length > 0 ? (
        <img src={result} alt={result} />
      ): (
        <p className='generate'>No Data!</p>

      )}
      

    </div>
  )
}

export default Dalle
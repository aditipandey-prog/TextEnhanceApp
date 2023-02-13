import React, {useState} from 'react';



export default function TextForm(props) {
const [fWord, findWord] = useState("");
const [rWord, replaceWord] = useState("");

const handlefindChange = (event) => {
  findWord(event.target.value);
};
const handleReplaceChange = (event) => {
console.log(replaceWord(event.target.value)) ;
};
//replace 
const handleReplaceClick = () => {
  let newText = text.replaceAll(fWord,rWord);
  setText(newText);
};
//Text To voice 
const speak = () => {
  let msg = new SpeechSynthesisUtterance(text);
  const toogle = document.getElementById("toggle");
  if ((toogle.textContent === "Speak")) {
    window.speechSynthesis.speak(msg);
    toogle.textContent = "Stop";
  //   console.log("play");
  } else {
    toogle.textContent = "Speak";
    window.speechSynthesis.cancel();
  //   console.log("stop");
  }
};

const CapitalizeWord =()=>{
   let newText =()=>{
     let finalArrstr=[];
     let strArr= text.split(' ');
     strArr.forEach(element=>{
        finalArrstr.push(element.charAt(0).toUpperCase()+element.slice(1).toLowerCase())
      });
      let finalstr=finalArrstr.join(' ')
      return finalstr;
   }
   setText(newText);
}

const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
}
const handleChange= (event)=>{
    console.log("handleChange is working!!!!!");
  setText(event.target.value) ;
    
}
const handleClick=()=>{
    let newText= text.toUpperCase();
    let words = text.match(/\w+/g);
    console.log(words);
    setText(newText);
    
}
const handleLoClick=()=>{
  let newText= text.toLowerCase();
  setText(newText);
  
}

const handleClearClick=()=>{
  let newText='';
  setText(newText);
}

const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
}

const handleCopyClick=()=>{
  navigator.clipboard.writeText(text);
}
    const [text,setText]=useState('');
  return (
    <>
<div id="container">
    <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" placeholder='Enter your text here' value={text} onChange={handleChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} id="mybox" rows="10"></textarea>
    </div>
     <button  className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleClick} >Change to Uppercase</button>
     <button  className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleLoClick} >Change to Lowercase</button>
   
    <button type="submit" onClick={speak} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 mx-1`} disabled={text.length===0} id="toggle" > Read aloud</button>
     <button  className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={CapitalizeWord} disabled={text.length===0} >Capitalize First Letter</button>
     <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={downloadTxtFile} disabled={text.length===0}>Download Text</button>
     <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleClearClick} disabled={text.length===0}>Clear</button>
     <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleExtraSpaces} disabled={text.length===0}>Remove Extra Spaces</button>
     <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleCopyClick} disabled={text.length===0}>Copy Text</button>

</div>
<div className="container">
<div className="input-group">
  <input type="search" className="form-group rounded col-xs-2 my-1" placeholder="Find" onChange = {handlefindChange} aria-label="Search" aria-describedby="search-addon" />
  <input type="search" className="form-group rounded col-xs-2 my-1" onChange = {handleReplaceChange} placeholder="Replace " aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleReplaceClick} disabled={text.length===0}>Find and Replace All</button>
 
</div>
</div>

<div id="container">
  <h1 style={{color:props.mode==='light'?'black':'white'}}>Preview</h1>
   <p style={{color:props.mode==='light'?'black':'white'}}>{text.length} characters ,{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
   <p style={{color:props.mode==='light'?'black':'white'}}>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
   <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?text:"Nothing to preview"}</p>
    
</div>
    </>
  
  
  )
}
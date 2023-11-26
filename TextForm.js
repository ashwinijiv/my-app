import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase!',"success")
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase!',"success")
    }
    
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert('Text Cleared!',"success")
    }
    
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied!',"success")
    }
    
    const handleTCClick = ()=>{
        let textSpil = text.split(' ')
        let newText = ''
        for (let i=0; i < textSpil.length; i++){
            if (textSpil[i] !== ''){
                newText += textSpil[i][0].toUpperCase() + (textSpil[i].slice(1)).toLowerCase() + ' '
            } 
        }
        console.log('hey---',newText)
        setText(newText)
        props.showAlert('Converted to Titlecase!',"success")
    };
    
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    
    const [text, setText] = useState("")

    let tL = text.split(/\s+/)
    let tLC = 0
    for (let i=0; i < tL.length; i++){
        if (tL[i] !== ''){
            tLC += 1
        }
    }

  return (
    <>
    <div className='container my-2' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h3 className='mb-3'>{props.heading}</h3>
        <div className="mb-3 border border-dark">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#d6d0d0':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-secondary border mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-secondary border mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-secondary border mx-1 my-1" onClick={handleTCClick}>Convert to Titlecase</button>
        <button disabled={text.length === 0} className="btn btn-secondary border mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-secondary border mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-4' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{tLC} words and {text.length} characters</p>
        <h4 className='my-3'>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
  }
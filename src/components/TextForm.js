import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lowercase!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleClear = () => {
        var t = document.getElementById("myBox");
        t.value = "";
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text Here');

    return (
        <>
        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} className="form-control" id="myBox" style={{backgroundColor: props.mode === 'light' ? 'white' : '#221f49', color: props.mode === 'light' ? 'black' : 'white', resize: 'none'}} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1>Your text Summary:</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} min to read this</p>

            <h3>Preview:</h3>
            <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
        </div>
        </>
    )
}

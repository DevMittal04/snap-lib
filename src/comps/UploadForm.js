import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/jpeg', 'image/png'];

    const fileChangeHandler = (e) => {
        var selectedFile = e.target.files[0];
        console.log(selectedFile);

        if(selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (.png or .jpeg)");
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={ fileChangeHandler } />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}

export default UploadForm;
import ReactDOM from 'react-dom';
import { Stack, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

export default function OpenSystemFileDialog({ passFile }) {
    const fileInput = React.useRef();
    const [name, setName] = React.useState('');
    const [file, setFile] = React.useState(null);

    const onFileChoice = () => {
        fileInput.current.click();
    };
    const changing = (e) => {
        setFile(e.target.files[0]);
        setName(fileInput.current.files[0].name);
        passFile(e.target.files[0]);
    };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={onFileChoice}>
                upload file
            </Button>
            <TextField value={name} name="name" label="Selected file" onChange={(e) => setName(e.target.value)} />

            <input onChange={changing} ref={fileInput} type="file" style={{ display: 'none' }} />
        </div>
    );
}

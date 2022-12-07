import ReactDOM from 'react-dom';
import { Grid, Stack, TextField } from '@mui/material';
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
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Button size="large" fullWidth variant="outlined" color="primary" onClick={onFileChoice}>
                        upload file
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <TextField fullWidth value={name} name="name" label="Selected file" onChange={(e) => setName(e.target.value)} />
                </Grid>
            </Grid>

            <input onChange={changing} ref={fileInput} type="file" style={{ display: 'none' }} />
        </div>
    );
}

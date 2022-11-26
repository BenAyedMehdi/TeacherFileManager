import React, { useState, useEffect } from 'react';
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import OpenSystemFileDialog from './OpenSystemFileDialog';
import apiCalls from '../../api/apiCalls';
import { set } from 'lodash';

export default function FormDialog({ submitted }) {
    const [name, setName] = React.useState('');
    const [description, setDescripton] = React.useState('');
    const [file, setFile] = React.useState(null);
    const [isError, setIsError] = React.useState(false);

    const [buttonName, setButtonName] = React.useState('Add File');

    const handleFile = (file) => {
        setIsError(false);
        setFile(file);
    };

    const submit = async () => {
        if (name === '' || file === null) {
            setIsError(true);
            return;
        }
        const tmp = { name: name, description: description, file: file };
        setName('');
        setDescripton('');
        setFile(null);
        submitted(tmp);
    };

    return (
        <div>
            <Stack marginTop={5} spacing={3}>
                {isError && (
                    <>
                        <Typography variant="h5" color="error" gutterBottom>
                            error
                        </Typography>
                    </>
                )}
                <TextField value={name} name="name" label="File name" onChange={(e) => setName(e.target.value)} />
                <TextField value={description} name="description" label="Description" onChange={(e) => setDescripton(e.target.value)} />
                <OpenSystemFileDialog passFile={handleFile} />
                <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={submit}>
                    {buttonName}
                </LoadingButton>
            </Stack>
        </div>
    );
}

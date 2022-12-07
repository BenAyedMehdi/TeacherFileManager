import React, { useState, useEffect } from 'react';
import { Grid, Stack, TextField } from '@mui/material';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import apiCalls from '../../api/apiCalls';
import { set } from 'lodash';

export default function FormDialog({ submitted }) {
    const categories = [
        {
            categoryId: 1,
            categoryName: 'Cours'
        },
        {
            categoryId: 2,
            categoryName: 'TD'
        }
    ];
    const [choice, setChoice] = React.useState(1);

    const [name, setName] = React.useState('');
    const [description, setDescripton] = React.useState('');
    const [file, setFile] = React.useState(null);
    const [isError, setIsError] = React.useState(false);

    const [buttonName, setButtonName] = React.useState('Add File');
    const [visibility, setVisibility] = React.useState(true);

    const handleRadioChange = (event) => {
        setVisibility(event.target.value);
        changeValue(event.target.value);
    };
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
    const handleChange = (event) => {
        setChoice(event.target.value);
    };

    return (
        <div>
            <Stack marginTop={5} spacing={3}>
                <Stack spacing={3}>
                    <Grid container rowSpacing={3} columnSpacing={12}>
                        <Grid item xs={12} md={6} lg={6}>
                            <InputLabel htmlFor="max-width">File name</InputLabel>
                            <TextField fullWidth value={name} name="name" label="File name" onChange={(e) => setName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <InputLabel htmlFor="max-width">Category</InputLabel>
                            <Select
                                fullWidth
                                value={choice}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'category',
                                    id: 'category'
                                }}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.categoryId} value={category.categoryId}>
                                        {category.categoryName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <InputLabel htmlFor="max-width">Choose a file</InputLabel>
                            <OpenSystemFileDialog passFile={handleFile} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <InputLabel htmlFor="max-width">File order in the list</InputLabel>
                            <TextField
                                id="outlined-number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <InputLabel htmlFor="max-width">Message</InputLabel>
                            <TextField
                                fullWidth
                                value={name}
                                name="name"
                                label="Ex: check this out"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <InputLabel htmlFor="max-width">Visibility</InputLabel>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={visibility}
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="public" />
                                    <FormControlLabel value={false} control={<Radio />} label="private" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <InputLabel htmlFor="max-width">Description</InputLabel>
                            <TextField
                                value={description}
                                multiline
                                fullWidth
                                rows={2}
                                name="description"
                                label="(optional)"
                                onChange={(e) => setDescripton(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Stack>
                {isError && (
                    <>
                        <Typography variant="h5" color="error" gutterBottom>
                            error
                        </Typography>
                    </>
                )}

                <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={submit}>
                    {buttonName}
                </LoadingButton>
            </Stack>
        </div>
    );
}

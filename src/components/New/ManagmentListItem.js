import React, { useState, useEffect } from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
    CircularProgress,
    IconButton
} from '@mui/material';

import {
    EditOutlined,
    FilePdfOutlined,
    DeleteOutlined,
    EyeOutlined,
    DownloadOutlined,
    FileProtectOutlined,
    GiftOutlined,
    MessageOutlined,
    SettingOutlined
} from '@ant-design/icons';
// project import
import MainCard from 'components/MainCard';
// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};
// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};
// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';
import AddFileDialog from './AddFileDialog';
import apiCalls from 'api/apiCalls';
// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function ManagmentListItem({ e, docKey }) {
    const url = 'https://pdfuploader20221121222942.azurewebsites.net/api/fileupload';

    const handleDownload = async () => {
        const docs = await apiCalls.GetDocumentByName(e.blobName).then((response) => {
            console.log(response);
            response.data.blob().then((blob) => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'testFile.docx';
                a.click();
            });
        });
    };

    return (
        <ListItemButton key={docKey} divider>
            <ListItemAvatar>
                <Avatar
                    sx={{
                        color: 'primary.main',
                        bgcolor: 'primary.lighter'
                    }}
                >
                    <FilePdfOutlined />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Typography variant="subtitle1">{e.title}</Typography>} secondary="Today, 2:00 AM" />
            <ListItemSecondaryAction>
                <Grid container spacing={3}>
                    <Grid item>
                        <Button href={`${url}/${e.blobName}`} target="_blank" variant="outlined" shape="circle" size="large">
                            <EyeOutlined />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleDownload} color="success" variant="contained" shape="circle" size="large">
                            <DownloadOutlined />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" shape="circle" size="large">
                            <EditOutlined />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button color="error" variant="contained" shape="circle" size="large">
                            <DeleteOutlined />
                        </Button>
                    </Grid>
                </Grid>
            </ListItemSecondaryAction>
        </ListItemButton>
    );
}

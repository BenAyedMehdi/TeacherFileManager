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

import { EyeOutlined, DownloadOutlined, FileProtectOutlined, GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
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
import ManagmentListItem from './ManagmentListItem';
// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function DocumentsList({ docs, loading }) {
    return (
        <Grid item xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h5">Available files</Typography>
                </Grid>
                <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
                <List
                    component="nav"
                    sx={{
                        px: 0,
                        py: 0,
                        '& .MuiListItemButton-root': {
                            py: 1.5,
                            '& .MuiAvatar-root': avatarSX,
                            '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                        }
                    }}
                >
                    {loading && (
                        <Stack alignItems="center">
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        </Stack>
                    )}
                    {!loading &&
                        docs.map((e) => {
                            return <ManagmentListItem e={e} />;
                        })}
                </List>
            </MainCard>
        </Grid>
    );
}

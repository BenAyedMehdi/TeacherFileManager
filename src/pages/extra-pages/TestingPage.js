// material-ui
import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// project import
import MainCard from 'components/MainCard';
import AddFilePoster from 'components/New/AddFilePoster';
import AddFileDialog from 'components/New/AddFileDialog';
import DocumentsList from 'components/New/DocumentsList';
import NavCard from 'layout/MainLayout/Drawer/DrawerContent/NavCard';
import apiCalls from '../../api/apiCalls';

// ==============================|| SAMPLE PAGE ||============================== //

export default function TestingPage({ title }) {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDocuments = async () => {
            setLoading(true);
            const docs = await apiCalls.GetAllDocuments();
            setDocuments(docs);
            setLoading(false);
        };
        getDocuments();
    }, []);

    const handleDoc = (doc) => {
        setDocuments([...documents, doc]);
    };

    return (
        <>
            <MainCard>
                <Grid container spacing={3}>
                    <Grid item>
                        <AddFileDialog addedDoc={handleDoc} />
                    </Grid>
                    <Grid item>
                        <AddFileDialog addedDoc={handleDoc} />
                    </Grid>
                </Grid>
            </MainCard>
            <MainCard title={title}>
                <DocumentsList loading={loading} docs={documents} />
            </MainCard>
        </>
    );
}

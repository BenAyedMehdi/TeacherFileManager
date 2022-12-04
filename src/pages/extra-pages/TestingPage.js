// material-ui
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// project import
import MainCard from 'components/MainCard';
import AddFilePoster from 'components/New/AddFilePoster';
import DocumentsList from 'components/New/DocumentsList';
import NavCard from 'layout/MainLayout/Drawer/DrawerContent/NavCard';
import apiCalls from '../../api/apiCalls';

// ==============================|| SAMPLE PAGE ||============================== //

export default function TestingPage({ title }) {
    const [documents, setDocuments] = useState([]);
    const [laoding, setLoading] = useState(false);

    useEffect(() => {
        const getDocuments = async () => {
            setLoading(true);
            const docs = await apiCalls.GetAllDocuments();
            setDocuments(docs);
            setLoading(false);
            console.log(docs);
        };
        getDocuments();
    }, []);

    const handleDoc = (doc) => {
        console.log(doc);
        setDocuments([...documents, doc]);
    };

    return (
        <MainCard title={title}>
            <Typography variant="body2">
                You know that with every document you share, many student could learn and practice much more, thank you for doing this and
                never stop making access to information easier and easier
            </Typography>
            <AddFilePoster docAdded={handleDoc} />
            <DocumentsList loading={false} docs={documents} />
        </MainCard>
    );
}

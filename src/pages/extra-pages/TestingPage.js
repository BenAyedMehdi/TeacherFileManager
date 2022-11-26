// material-ui
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
// project import
import MainCard from 'components/MainCard';
import AddFilePoster from 'components/New/AddFilePoster';
import DocumentsList from 'components/New/DocumentsList';
import NavCard from 'layout/MainLayout/Drawer/DrawerContent/NavCard';
import apiCalls from '../../api/apiCalls';

// ==============================|| SAMPLE PAGE ||============================== //

export default function TestingPage() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const getDocuments = async () => {
            const docs = await apiCalls.GetAllDocuments();
            setDocuments(docs);
            console.log(docs);
        };
        getDocuments();
    }, []);

    const handleDoc = (doc) => {
        console.log(doc);
        setDocuments([...documents, doc]);
    };

    return (
        <MainCard title="Add a new file">
            <Typography variant="body2">
                You know that with every document you share, many student could learn and practice much more, thank you for doing this and
                never stop making access to information easier and easier
            </Typography>
            <AddFilePoster docAdded={handleDoc} />
            <DocumentsList docs={documents} />
        </MainCard>
    );
}

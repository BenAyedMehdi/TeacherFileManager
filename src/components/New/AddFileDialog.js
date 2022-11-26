import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AuthRegister from 'pages/authentication/auth-forms/AuthRegister';
import AddNewFileForm from './AddNewFileForm';
import apiCalls from '../../api/apiCalls';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddFileDialog({ addedDoc }) {
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState(null);
    const [name, setName] = React.useState('');
    const [description, setDescripton] = React.useState('');
    const [blobName, setBlobName] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (doc) => {
        setName(doc.name);
        setDescripton(doc.description);
        setFile(doc.file);
        console.log(doc);

        const formData = new FormData();
        formData.append('file', doc.file);
        const blobName = await apiCalls.uploadFile(formData).then(console.log('File uploaded'));

        const docToAdd = {
            title: doc.name,
            description: doc.description,
            blobName: blobName
        };
        const res = await apiCalls.addDocument(docToAdd);
        console.log('doc added', res);
        addedDoc(res);
        setName('');
        setDescripton('');
        setFile(null);
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="success" onClick={handleClickOpen}>
                Add new File
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                onClose={handleClose}
                maxWidth="md"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Adding ...'}</DialogTitle>
                <DialogContent>
                    <AddNewFileForm submitted={handleSubmit} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>- Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

// material-ui
import { Button, CardMedia, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';
import AddFileDialog from './AddFileDialog';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const AddFilePoster = ({ docAdded }) => (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
        <Stack alignItems="center" spacing={2.5}>
            <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
            <Stack alignItems="center">
                <Typography variant="h5">Here you start</Typography>
                <Typography variant="h6" color="secondary">
                    Ready to add a new file?
                </Typography>
            </Stack>
            <AnimateButton>
                <AddFileDialog addedDoc={docAdded} />
            </AnimateButton>
        </Stack>
    </MainCard>
);

export default AddFilePoster;

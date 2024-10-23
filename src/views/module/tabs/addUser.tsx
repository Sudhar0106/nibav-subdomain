import { Box, InputAdornment, Modal, TextField } from '@mui/material';
import { Mail, Phone, User} from 'lucide-react';
import Grid from '@mui/material/Grid2';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50vw",
    bgcolor: 'background.paper',
    border: "none",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

export const SimpleDialog = (props: SimpleDialogProps) => {
    const { onClose, open } = props;


    return (

        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style }}>
                <div className='flex justify-between items-center'>
                    <h2 className=" font-[600]">Set backup account</h2>
                    <button onClick={onClose}>
                        <HighlightOffOutlinedIcon fontSize="medium" color='action' />
                    </button>
                </div>

                <form className='mt-8'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label='User Name'
                                variant="outlined"
                                fullWidth
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <User size={20} />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label='E-mail'
                                variant="outlined"
                                fullWidth
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Mail size={20} />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                label='Phone'
                                variant="outlined"
                                fullWidth
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Phone size={20} />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>

                            <DesktopDatePicker label="DOB"
                                format='DD/MM/YYYY'
                                slotProps={{ textField: { fullWidth: true, InputLabelProps: { shrink: true } } }}
                            />
                        </Grid>
                    </Grid>

                </form>
            </Box>
        </Modal>
    );
}


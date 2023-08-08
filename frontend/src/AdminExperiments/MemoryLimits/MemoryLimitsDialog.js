import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography
} from "@mui/material";
import {Camera, FileCopy, FilePresent, FileUpload, PhotoCamera, Upload} from "@mui/icons-material";
import {styled} from "@mui/material/styles";

const Input = styled('input')({
	display: 'none',
});

function MemoryLimitsDialog(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<DialogTitle variant="h2">Memory Limits</DialogTitle>
			<DialogContent>
				<DialogContentText>
					You can modify the following values:
				</DialogContentText>
				<Typography variant="h4" mt={2} gutterBottom>Images</Typography>
				<label htmlFor="contained-button-file">
					<Input accept="image/*" id="contained-button-file" multiple type="file"/>
					<Button variant="contained" component="span" startIcon={<PhotoCamera/>}>
						Upload
					</Button>
				</label>

				<Typography variant="h4" mt={2} gutterBottom>Results</Typography>
				<label htmlFor="contained-button-file">
					<Input accept="image/*" id="contained-button-file" multiple type="file"/>
					<Button variant="contained" component="span" startIcon={<FileUpload/>}>
						Upload
					</Button>
				</label>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose} href={"/memory-limits"}>Create</Button>
			</DialogActions>
		</>
	);
}

export default MemoryLimitsDialog;

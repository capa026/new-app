import { Avatar, Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 10,
          left: { xs: "calc(50% - 25px)", md: 10 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={400} bgcolor="white" p={3} borderRadius={4}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg"
            />
            <Typography fontWeight={500} variant="span">
              Carlos
            </Typography>
          </UserBox>
        </Box>
      </StyledModal>
    </>
  );
};
export default Add;

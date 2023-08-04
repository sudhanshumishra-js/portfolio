import { CircularProgress, Modal } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <>
      <Modal open={true} className="loader">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress sx={{ color: "black", fontSize: "large" }} />
          <h3>Loading</h3>
        </div>
      </Modal>
    </>
  );
};

export default Loader;

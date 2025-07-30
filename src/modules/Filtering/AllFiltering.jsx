import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, List, Typography } from "@mui/material";
import React, { useState } from "react";

const AllFiltering = ({ title, children, show=true , opened=true}) => {
  const [open, setOpen] = useState(opened);
  
  const toggleCategoryBox = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header with toggle */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={toggleCategoryBox}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "1rem", fontWeight: 600, mb: 1, mt: 1}}
           mb={`${!open && " 2px"}`}
        >
          {title}
        </Typography>
        {open ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small"  />}
      </Box>

      {/* Expandable Content */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense sx={{ p: 0 }}>
          {children}
           {
            show &&        
       <Typography
            color="#046dff"
            mb={2}
            fontSize="16px"
            sx={{ cursor: "pointer" }}
          >
            See all
          </Typography>

             
           }
        </List>
      </Collapse>
    </>
  );
};

export default AllFiltering;

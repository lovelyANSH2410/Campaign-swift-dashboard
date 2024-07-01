import React, { useState } from "react";
import { Menu, MenuItem, styled, Checkbox, ListItemText, Typography } from "@mui/material";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    position: "absolute",
    backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "169px",
    boxShadow: "0 0px 6px rgba(0, 0, 0, 0.1)",
    width: "174px",
    height: "231px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
  },
}));

const StyledSubMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 0px 6px rgba(0, 0, 0, 0.1)",
    width: "174px",
    marginLeft: "100px",
    marginTop: "213px",
    height: "158px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme, selected }) => ({
  display: "flex",
  alignItems: "center",
  height: "36.6px",
  margin: "5px",
  color: "#9F9F9F",
  backgroundColor: selected ? theme.palette.action.selected : "inherit",
  "&:hover": {
    backgroundColor: selected ? theme.palette.action.hover : theme.palette.action.hover,
  },
  "& .MuiTypography-root": {
    fontSize: "14px", 
  },
}));

const StyledSubMenuItem = styled(MenuItem)(({ theme, selected }) => ({
  display: "flex",
  alignItems: "center",
  height: "36.6px",
  margin: "0px 5px",
  padding:"23px",
  color: "#9F9F9F",
  backgroundColor: selected ? theme.palette.action.selected : "inherit",
  "&:hover": {
    backgroundColor: selected ? theme.palette.action.hover : theme.palette.action.hover,
  },
  "& .MuiTypography-root": {
    fontSize: "14px",
  },
}));

const mainMenuItems = ["Select All", "Facebook", "Instagram", "LinkedIn", "Pinterest"];
const facebookSubMenuItems = ["Select All", "IndiaFont", "AMS"];

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#9F9F9F",
  "& .MuiSvgIcon-root": {
    borderRadius: "50%", // This will change the border radius to be circular
  },
}));

const NestedMenu = ({ anchorEl, handleMenuClose }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [showFacebookSubMenu, setShowFacebookSubMenu] = useState(false);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);

  const handleSelectAll = () => {
    const allChecked = mainMenuItems.reduce((acc, item) => {
      if (item !== "Select All") {
        acc[item] = true;
      }
      return acc;
    }, {});
    setCheckedItems(allChecked);
  };

  const handleItemClick = (item, isSubmenu = false) => {
    if (item === "Select All") {
      handleSelectAll();
      return;
    }

    const newCheckedItems = {
      ...checkedItems,
      [item]: !checkedItems[item],
    };
    setCheckedItems(newCheckedItems);

    if (!isSubmenu && item === "Facebook") {
      if (!checkedItems[item]) {
        // Checkbox was unchecked, now checked
        setAnchorElSubMenu(anchorEl);
        setShowFacebookSubMenu(true);
      } else {
        // Checkbox was checked, now unchecked
        setShowFacebookSubMenu(false);
        setAnchorElSubMenu(null);
      }
    }
  };

  const handleSubMenuClose = () => {
    setShowFacebookSubMenu(false);
    setAnchorElSubMenu(null);
  };

  return (
    <>
      <StyledMenu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 47, left: 1332 }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {mainMenuItems.map((item, index) => (
          <StyledMenuItem
            key={index}
            selected={!!checkedItems[item]}
            onClick={() => handleItemClick(item)}
          >
            <CustomCheckbox sx={{ borderRadius: "50%" }} checked={!!checkedItems[item]} />
            <ListItemText
              primary={<Typography>{item}</Typography>}
            />
          </StyledMenuItem>
        ))}
      </StyledMenu>

      <StyledSubMenu
        anchorEl={anchorElSubMenu}
        keepMounted
        open={showFacebookSubMenu}
        onClose={handleSubMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {facebookSubMenuItems.map((item, index) => (
          <StyledSubMenuItem
            key={index}
            selected={!!checkedItems[item]}
            onClick={() => handleItemClick(item, true)}
          >
            <CustomCheckbox checked={!!checkedItems[item]} />
            <ListItemText
              primary={<Typography>{item}</Typography>}
              secondary={item === "IndiaFont" || item === "AMS" ? "Facebook" : null}
            />
          </StyledSubMenuItem>
        ))}
      </StyledSubMenu>
    </>
  );
};

export default NestedMenu;

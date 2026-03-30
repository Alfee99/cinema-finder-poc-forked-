import {
  IconButton,
  Popover,
  Backdrop,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import { useRef, useState } from "react";
import { MdSettings } from "react-icons/md";
import { startCase } from "lodash";
import { mapTypes, useMapType } from "./Map";

const MapTypeMenu = () => {
  const [open, setOpen] = useState(false);
  const settingsButtonRef = useRef(null);

  const [mapType, setMapType] = useMapType();

  return (
    <>
      <IconButton
        ref={settingsButtonRef}
        onClick={() => setOpen(true)}
        sx={{
          color: open ? "#f5c842" : "rgba(255,255,255,0.6)",
          border: "1px solid",
          borderColor: open ? "#f5c842" : "rgba(255,255,255,0.15)",
          borderRadius: "8px",
          padding: "6px",
          transition: "all 0.2s ease",
          "&:hover": {
            color: "#f5c842",
            borderColor: "#f5c842",
            backgroundColor: "rgba(245, 200, 66, 0.08)",
          },
        }}
      >
        <MdSettings size={20} />
      </IconButton>

      <Popover
        open={open}
        anchorEl={settingsButtonRef?.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1,
            backgroundColor: "#141418",
            border: "1px solid rgba(245, 200, 66, 0.2)",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          },
        }}
      >
        <Box sx={{ p: 2.5 }}>
          <FormControl>
            <FormLabel
              sx={{
                color: "#f5c842",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                mb: 1,
                "&.Mui-focused": { color: "#f5c842" },
              }}
            >
              Map library
            </FormLabel>
            <RadioGroup
              value={mapType}
              onChange={(evt) => {
                setMapType(evt.target.value);
                setOpen(false);
              }}
            >
              {mapTypes.map((type) => (
                <FormControlLabel
                  key={type}
                  value={type}
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "rgba(255,255,255,0.3)",
                        "&.Mui-checked": { color: "#f5c842" },
                      }}
                    />
                  }
                  label={startCase(type)}
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    "&:hover": { color: "#f5c842" },
                    transition: "color 0.2s ease",
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Popover>
    </>
  );
};
export default MapTypeMenu;

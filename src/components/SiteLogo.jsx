import { SvgIcon } from "@mui/material";
import { GiFilmProjector } from "react-icons/gi";

// Manually extract out viewBox and path from svg import
const splitSourceStrs = GiFilmProjector.toString().split(/[()]/);
const jsonStr = splitSourceStrs.filter(
  (str) => str[0] === "{" && str.slice(-1)[0] === "}"
)[0];
// In production the json is minified to js (and stops being able to be parsed by JSON.parse)
const correctedJsonStr = jsonStr.replace(
  /(['"])?([a-z0-9A-Z_]+)(['"])?:/g,
  '"$2": '
);

const jsxEl = JSON.parse(correctedJsonStr);
const viewBox = jsxEl.attr.viewBox;
const d = jsxEl.child[0].attr.d;

const SiteLogo = (props) => {
  return (
    <SvgIcon
      {...{ viewBox }}
      fontSize="large"
      {...props}
      sx={{
        mr: 1.5,
        color: "#f5c842",
        fontSize: "2rem",
        filter: "drop-shadow(0 0 6px rgba(245, 200, 66, 0.5))",
        transition: "filter 0.3s ease, transform 0.3s ease",
        "&:hover": {
          filter: "drop-shadow(0 0 12px rgba(245, 200, 66, 0.9))",
          transform: "scale(1.1) rotate(-5deg)",
        },
        ...props.sx,
      }}
    >
      <path {...{ d }} />
    </SvgIcon>
  );
};
export default SiteLogo;

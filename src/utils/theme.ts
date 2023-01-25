import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    // primary: {
    //   main: "#121212",
    // },
    // secondary: { main: "#F4F4F4" },
  },
  typography: {
    fontFamily: "Actor",
    allVariants: {
      color: "#F4F4F4",
    },
    h1: {
      fontSize: 36,
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 24,
    },
    subtitle2: {
      fontSize: 20,
    },
    body2: {
      color: "rgba(255, 255, 255, 0.6)",
      fontSize: 14,
      fontWeight: 600,
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#A9A9A9",
          "&.Mui-checked": {
            color: "#fff",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#282828",
          boxShadow:
            "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
          borderRadius: 40,
          padding: "16px 17px",
          "&.MuiPopover-paper": {
            padding: 0,
            borderRadius: 4,
            backgroundColor: "#fff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 50,
          height: 30,
          padding: 0,
          borderRadius: 20,
        },
        switchBase: {
          padding: "2px 0px",
          transform: "translateX(5px)",
          "&.Mui-checked": {
            color: "#fff",
          },
        },
        thumb: {
          width: 25,
          height: 25,
          borderRadius: 20,
        },
        track: {
          backgroundColor: "#366EFF",
          opacity: 1,
          ".Mui-checked.Mui-checked + &": {
            backgroundColor: "#10C200",
            opacity: 1,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: "#fff",
          fontWeight: 600,
        },
        contained: {
          backgroundColor: "#366EFF",
          fontWeight: 600,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&.Mui-focused": {
            color: "#fff",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "#fff",
            },
          },
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#fff",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
          fontWeight: 600,
          "&.Mui-focused": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.MuiSelect-root:hover": {
            "& > fieldset": {
              borderColor: "#fff",
            },
          },
        },
        notchedOutline: {
          borderColor: "#fff",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#fff",
        },
      },
    },
  },
});

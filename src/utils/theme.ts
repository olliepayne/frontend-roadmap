import { Theme } from "theme-ui"

export const theme: Theme = {
  space: ["0rem", "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem"],
  fonts: {
    heading: "Roboto",
    body: "Nunito"
  },
  fontSizes: [
    "0.875rem", // 14px
    "1rem", // 16px
    "1.125rem", // 18px
    "1.5rem", // 24px
    "2.25rem", // 36px
    "3.375rem", // 54px
    "5.063rem" // 81px
  ],
  layout: {
    container1200: {
      maxWidth: "1200px"
    }
  },
  links: {
    smoothUnderLine: {
      position: "relative",
      cursor: "pointer",
      "::after": {
        content: `""`,
        width: 0,
        height: "4px",
        position: "absolute",
        bottom: 0,
        left: 0,
        bg: "black",
        transition: "width 0.2s ease-in"
      },
      ":hover": {
        "::after": {
          width: "100%",
          transition: "width 0.2s ease-in"
        }
      }
    }
  },
  styles: {
    root: {
      body: {
        p: 0,
        m: 0,
        boxSizing: "border-box"
      }
    },
    h4: {
      fontFamily: "heading",
      fontSize: [2, 3],
      fontWeight: 700
    }
  }
}

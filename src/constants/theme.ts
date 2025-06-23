export const theme = {
  colors: {
    primary: "#FF7622",
    background: "#181C2E",
    textPrimary: "#FF7622",
    textSecondary: "#1E1D1D",
    border: "#646982",
    surface: "#1F243B",
  },
  typography: {
    fontFamily: "Sen",

    heading1: {
      fontSize: 32,
      fontWeight: "700",
      lineHeight: 40,
    },
    heading2: {
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 32,
    },
    heading3: {
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 28,
    },

    body: {
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 24,
    },

    bodyBold: {
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 24,
    },

    caption: {
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 16,
    },

    button: {
      fontSize: 16,
      fontWeight: "700",
      lineHeight: 24,
      letterSpacing: 0.5,
      textTransform: "uppercase" as const,
    },
  },
};

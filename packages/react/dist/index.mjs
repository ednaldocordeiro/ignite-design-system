var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D",
  danger: "#ff1d23"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Avatar/styles.ts
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  background: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",
        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          backgroundColor: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $ignite300"
  },
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300",
    border: "2px solid $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0%)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0%)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx2(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx2(CheckboxIndicator, { children: /* @__PURE__ */ jsx2(Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: {
        fontSize: "$xl"
      },
      md: {
        fontSize: "$2xl"
      },
      lg: {
        fontSize: "$4xl"
      },
      "2xl": {
        fontSize: "$5xl"
      },
      "3xl": {
        fontSize: "$6xl"
      },
      "4xl": {
        fontSize: "$7xl"
      },
      "5xl": {
        fontSize: "$8xl"
      },
      "6xl": {
        fontSize: "$8xl"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: {
        fontSize: "$xxs"
      },
      xs: {
        fontSize: "$xs"
      },
      sm: {
        fontSize: "$sm"
      },
      md: {
        fontSize: "$md"
      },
      lg: {
        fontSize: "$lg"
      },
      xl: {
        fontSize: "$xl"
      },
      "2xl": {
        fontSize: "$2xl"
      },
      "4xl": {
        fontSize: "$4xl"
      },
      "5xl": {
        fontSize: "$5xl"
      },
      "6xl": {
        fontSize: "$6xl"
      },
      "7xl": {
        fontSize: "$7xl"
      },
      "8xl": {
        fontSize: "$8xl"
      },
      "9xl": {
        fontSize: "$9xl"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Multistep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gap: "$2",
  marginTop: "$1",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$xs",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/Multistep/index.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function MultiStep(_a) {
  var _b = _a, { size, currentStep = 1 } = _b, props = __objRest(_b, ["size", "currentStep"]);
  return /* @__PURE__ */ jsxs2(MultiStepContainer, { children: [
    /* @__PURE__ */ jsxs2(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx3(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => /* @__PURE__ */ jsx3(Step, { active: currentStep >= step }, step)) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/TextInput/index.tsx
import { forwardRef } from "react";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",
  variants: {
    size: {
      sm: {
        padding: "$2 $3"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: "none"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var TextInput = forwardRef(
  (_a, ref) => {
    var _b = _a, { prefix, containerProps } = _b, props = __objRest(_b, ["prefix", "containerProps"]);
    return /* @__PURE__ */ jsxs3(TextInputContainer, __spreadProps(__spreadValues({}, containerProps), { children: [
      !!prefix && /* @__PURE__ */ jsx4(Prefix, { children: prefix }),
      " ",
      /* @__PURE__ */ jsx4(Input, __spreadValues({ ref }, props))
    ] }));
  }
);
TextInput.displayName = "TextInput";

// src/components/Toast/index.tsx
import * as RToast from "@radix-ui/react-toast";
import { X } from "phosphor-react";

// src/components/Toast/styles.ts
import * as Toast from "@radix-ui/react-toast";
var hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});
var slideIn2 = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: "translateX(0)" }
});
var ToastRoot = styled(Toast.Root, {
  position: "relative",
  '&[data-state="open"]': {
    animation: `${slideIn2} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`
  }
});
var Close2 = styled(Toast.Close, {
  position: "absolute",
  top: "$4",
  right: "$4",
  color: "$gray200",
  cursor: "pointer"
});
var Viewport2 = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: "$8",
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  zIndex: 9999
});

// src/components/Toast/index.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Toast2(_a) {
  var _b = _a, { title, description, children } = _b, props = __objRest(_b, ["title", "description", "children"]);
  return /* @__PURE__ */ jsxs4(Fragment, { children: [
    /* @__PURE__ */ jsx5(ToastRoot, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsxs4(Box, { css: { padding: "$3 $5" }, children: [
      /* @__PURE__ */ jsx5(RToast.Title, { asChild: true, children: /* @__PURE__ */ jsx5(Heading, { children: title }) }),
      /* @__PURE__ */ jsx5(RToast.Description, { asChild: true, children: /* @__PURE__ */ jsx5(Text, { size: "sm", children: description }) }),
      /* @__PURE__ */ jsx5(Close2, { asChild: true, children: /* @__PURE__ */ jsx5(X, { size: 20 }) })
    ] }) })),
    /* @__PURE__ */ jsx5(Viewport2, {})
  ] });
}
var ToastProvider2 = RToast.ToastProvider;

// src/components/Tooltip/index.tsx
import * as RTooltip from "@radix-ui/react-tooltip";

// src/components/Tooltip/styles.tsx
import { TooltipContent } from "@radix-ui/react-tooltip";
var slideToTop = keyframes({
  "0%": { opacity: 0, transform: "translateY(5px)" },
  "100%": { opacity: 1, transform: "translateY(0px)" }
});
var slideToBottom = keyframes({
  "0%": { opacity: 0, transform: "translateY(-5px)" },
  "100%": { opacity: 1, transform: "translateY(0px)" }
});
var slideToRight = keyframes({
  "0%": { opacity: 0, transform: "translateX(5px)" },
  "100%": { opacity: 1, transform: "translateX(0px)" }
});
var slideToLeft = keyframes({
  "0%": { opacity: 0, transform: "translateX(-5px)" },
  "100%": { opacity: 1, transform: "translateX(0px)" }
});
var TooltipContentContainer = styled(TooltipContent, {
  background: "$gray900",
  borderRadius: "$md",
  padding: "$3",
  boxShadow: "4px 16px 24px 0px #00025",
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': {
      animation: `${slideToTop} 150ms ease-in`
    },
    '&[data-side="bottom"]': {
      animation: `${slideToBottom} 150ms ease-out`
    },
    '&[data-side="right"]': {
      animation: `${slideToRight} 150ms ease-out`
    },
    '&[data-side="left"]': {
      animation: `${slideToLeft} 150ms ease-out`
    }
  }
});

// src/components/Tooltip/index.tsx
import { Fragment as Fragment2, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Tooltip({ description, children }) {
  return /* @__PURE__ */ jsx6(Fragment2, { children: /* @__PURE__ */ jsxs5(RTooltip.Root, { children: [
    /* @__PURE__ */ jsx6(RTooltip.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsx6(RTooltip.Portal, { children: /* @__PURE__ */ jsxs5(TooltipContentContainer, { sideOffset: 2, children: [
      /* @__PURE__ */ jsx6(Text, { size: "sm", children: description }),
      /* @__PURE__ */ jsx6(RTooltip.TooltipArrow, {})
    ] }) })
  ] }) });
}
var TooltipProvider = RTooltip.Provider;
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast2 as Toast,
  ToastProvider2 as ToastProvider,
  Tooltip,
  TooltipProvider,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
};

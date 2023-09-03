import localFont from "next/font/local";

export const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/iran-yekan/woff/iranyekanwebmediumfanum.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/woff/iranyekanwebregularfanum.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/woff/iranyekanwebthinfanum.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/woff/iranyekanwebboldfanum.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/woff/iranyekanwebextraboldfanum.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});

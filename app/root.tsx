import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import Header from "./components/Header";
export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="stylesheet" href="./tailwind.css" />
        <Meta />
        <Links />
      </head>
      <body className="w-full h-full">
        <Header />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

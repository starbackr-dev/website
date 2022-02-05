import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import AlbyHeadIcon from "../public/images/alby_icon_head_icon.png";
import styles from "./tailwind.css";
import extendStyles from "./styles/tailwind.css";

export function links() {
  return [
    {
      rel: "icon",
      href: AlbyHeadIcon,
      type: "image/png"
    },
    {
      rel: "preload",
      href: "/images/diamond-wallet-layer.svg",
      as: "image",
      type: "image/svg+xml",
    },
    {
      rel: "preload",
      href: "/images/diamond-footer.svg",
      as: "image",
      type: "image/svg+xml",
    },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: extendStyles },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

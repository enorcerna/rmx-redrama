import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import type {LinksFunction} from "@remix-run/node";

import styles from "~/styles/tailwind.css?url";
import Header from "~/layouts/Header";
import {SidebarProvider} from "./components/ui/sidebar";
import AppSidebar from "./components/sidebar/AppSidebar";
import {NAVS} from "./constants/main";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: styles},
  {rel: "icon", href: "/logo.svg"},
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
export const clientLoader = async () => {
  return await NAVS();
};
export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <SidebarProvider>
          <AppSidebar nav={useLoaderData<typeof clientLoader>()} />
          <main className="flex flex-col w-full">
            <Header />
            {children}
          </main>
        </SidebarProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

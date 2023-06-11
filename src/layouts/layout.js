import * as React from "react";
import { root, layout, content, main } from "./layout.module.scss";
// import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className={root}>
      <div className={layout}>
        {/* header */}
        {/* <Header /> */}

        {/* main */}
        <div className={content}>
          <main className={main}>{children}</main>
          {/* footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>Max The Stranger: Full-Stack Software Developer</title>
      <link rel="canonical" href="https://code.maxthestranger.com" />
    </>
  );
}

import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <drk-container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://build.derekgarnett.com/index.css"
        />
        <script
          src="https://build.derekgarnett.com/index.js"
          defer
          type="module"
        ></script>
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <div className="content">{children}</div>
      </section>
    </drk-container>
  );
}

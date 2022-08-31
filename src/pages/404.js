/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";

function custom404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="Amazon Clone 404 - Page not found" />
        <meta name="author" content="Rajdeep Ghosh" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      
      <div className="p-6 sm:p-12 lg:p-20 w-screen h-screen flex flex-col justify-between bg-[#f5f5f5]">      
        <div className="font-mono text-lg tracking-wider">404</div>
        <div className="flex flex-col space-y-7">
          <h1 className=" text-3xl sm:text-5xl font-Rubik font-medium">
            Page not found
          </h1>
          <p className="text-lg">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <span>
            Back to{" "}
            <a className="bg-yellow-400" href="/">
              home
            </a>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default custom404;

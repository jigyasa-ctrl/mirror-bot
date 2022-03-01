import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/Layout"
export default function FirstPost() {
    return (
        <>
            <Layout>
                <h1>First page</h1>
                <Link href="/">
                    <h2>Return to home</h2>
                </Link>
                <Head>
                    <title>First Post</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Layout>

        </>
    )
}
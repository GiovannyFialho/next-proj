import Head from 'next/head';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
    return(
        <>
            <Head>
                <link rel="icon" href="/epic-icon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#f9004d" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp

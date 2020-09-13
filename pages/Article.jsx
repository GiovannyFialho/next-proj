import Head from 'next/head';

import Header from '../components/Header';
import HeadServices from '../components/HeadServices';
import Footer from '../components/Footer';

export default function Article(props) {
    const ga = () => {
        if (process.browser) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'UA-167888894-1');
        }
    }
    return (
        <>
            <Head>
                <link rel="icon" href="/epic-icon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content={props.description}
                />

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167888894-1"></script>
                <script>
                    {ga()}
                </script>
                <title>{props.title} - Epic Solutions</title>
            </Head>

            <div className="app__container section">
                <Header headerSection={true} />
                <main>
                    <div className="containerSection">
                        <HeadServices text={props.title} icon={props.icon} />
                        <div className="sectionsText container">
                            {props.text}
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

import Head from 'next/head';

import Header from '../components/Header';
import HeadServices from '../components/HeadServices';
import Footer from '../components/Footer';

export default function Article(props) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content={props.description}
                />

                <title>Epic Solutions | {props.title}</title>
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
                <Footer />
            </div>
        </>
    );
}

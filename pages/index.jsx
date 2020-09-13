import Head from 'next/head';
import Header from "../components/Header";
import Highlight from "../components/Highlight";
import About from "../components/About";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Customers from "../components/Customers";

export default function Home() {
    return (
        <>
            <Head>
                <title>Epic Solutions | Home</title>
                <link rel="icon" href="/epic-icon.ico" />
            </Head>
            <div className="app__container">
                <Header />
                <main>
                    <Highlight />
                    <About />
                    <Services />
                    <Partners />
                    <Customers />
                </main>
                <footer>
                    <Footer />  
                </footer>
            </div>
        </>
    )
}

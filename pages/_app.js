import '../styles/globals.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps, router }) {
    return (
        <main className='bg-white overflow-x-clip'>
            <Layout>
                <Component
                    {...pageProps}
                    key={router.asPath}
                />
            </Layout>
        </main>
    );
}

export default MyApp;

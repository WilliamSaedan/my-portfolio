import Layout from '../components/layout';
import '../styles/globals.css';

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

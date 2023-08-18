import Footer from '~/components/Footer';
import Main from '~/components/Main';

import indexStylesheetUrl from '~/styles/index.css';

import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
    return [{ title: "Hello, I'm Damien" }, { name: 'description', content: 'Welcome to my personal page' }];
};

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: indexStylesheetUrl }];
};

export default function Index() {
    return (
        <>
            <Main />
            <Footer />
        </>
    );
}

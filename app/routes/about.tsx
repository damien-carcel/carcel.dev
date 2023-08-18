import aboutStylesheetUrl from '~/styles/about.css';

import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
    return [{ title: "Hello, I'm Damien" }, { name: 'description', content: "Let's talk about me :)." }];
};

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: aboutStylesheetUrl }];
};

export default function Index() {
    return (
        <>
            <main>Here I come.</main>
        </>
    );
}

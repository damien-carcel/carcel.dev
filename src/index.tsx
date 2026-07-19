import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import About from './pages/About';
import Cv from './pages/CV';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/_404.js';

import './style.css';

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cv" component={Cv} />
          <Route default component={NotFound} />
        </Router>
      </main>
      <Footer />
    </LocationProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app')!);
}

// @ts-expect-error There is not types in Preact API for the parameters of the "prerender" function
export async function prerender(data) {
  return await ssr(<App {...data} />);
}

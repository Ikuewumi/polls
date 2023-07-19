import { useRoutes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { routes } from './routes';
import { Header } from './components/layout';

const App: Component = () => {
    const Route = useRoutes(routes);
    return (
        <>
            <Header />
            <Route />
        </>
    );
};

export default App;

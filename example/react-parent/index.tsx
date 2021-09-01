import * as React from 'react';
import ReactDOM from 'react-dom';
import NAVSPA, { AsyncNavspa } from "@navikt/navspa";


interface ChildProps {
    name: string;
}

const JsApp = NAVSPA.importer<ChildProps>('js-child');
const ReactApp = NAVSPA.importer<ChildProps>('react-child');
const SvelteApp = NAVSPA.importer<ChildProps>('svelte-child');
const AsyncApp = AsyncNavspa.importer<ChildProps>({
    appName: 'cra-child',
    appBaseUrl: 'http://localhost:2005',
    loader: <p>Laster Async-app</p>
})


function Application() {
    return (
        <>
            <h1>React Parent</h1>
            <JsApp name="frontend-forum" />
            <ReactApp name="frontend-forum" />
            <SvelteApp name="frontend-forum" />
            <AsyncApp name="frontend-forum" />
        </>
    );
}

ReactDOM.render(<Application />, document.getElementById('root'));
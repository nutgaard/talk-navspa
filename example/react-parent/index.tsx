import * as React from 'react';
import ReactDOM from 'react-dom';
import NAVSPA, { AsyncNavspa } from "@navikt/navspa";


interface ChildProps {
    name: string;
}

const JsApp = React.memo(NAVSPA.importer<ChildProps>('js-child'));
const ReactApp = NAVSPA.importer<ChildProps>('react-child');
const SvelteApp = React.memo(NAVSPA.importer<ChildProps>('svelte-child'));
const AsyncApp = AsyncNavspa.importer<ChildProps>({
    appName: 'cra-child',
    appBaseUrl: 'http://localhost:2005',
    loader: <p>Laster Async-app</p>
})

interface Props {
    appname: string;
    state: boolean;
    setState: (value: boolean) => void
}
function ControllButton(props: Props) {
    return (
        <div>
            <button disabled={props.state} onClick={() => props.setState(true)}>Mount {props.appname}</button>
            <button disabled={!props.state} onClick={() => props.setState(false)}>Unmount {props.appname}</button>
        </div>
    );
}

function Application() {
    const [jsApp, setJsApp] = React.useState<boolean>(true);
    const [reactApp, setReactApp] = React.useState<boolean>(true);
    const [svelteApp, setSvelteApp] = React.useState<boolean>(true);
    const [asyncApp, setAsyncApp] = React.useState<boolean>(true);

    return (
        <>
            <h1>React Parent</h1>
            <ControllButton appname="js-child" state={jsApp} setState={setJsApp} />
            <ControllButton appname="react-child" state={reactApp} setState={setReactApp} />
            <ControllButton appname="svelte-child" state={svelteApp} setState={setSvelteApp} />
            <ControllButton appname="async-child" state={asyncApp} setState={setAsyncApp} />
            { jsApp && <JsApp name="frontend-forum" /> }
            { reactApp && <ReactApp name="frontend-forum" /> }
            { svelteApp && <SvelteApp name="frontend-forum" /> }
            { asyncApp && <AsyncApp name="frontend-forum" /> }
        </>
    );
}

ReactDOM.render(<Application />, document.getElementById('root'));
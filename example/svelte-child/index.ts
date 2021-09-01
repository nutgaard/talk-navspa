import App from './App.svelte';

interface Props {
    name: string;
}

const scope = window['NAVSPA-V2'] || {};

scope['svelte-child'] = {
    mount(target: HTMLElement, props: Props) {
        new App({ target, props });
    },
    unmount(target: HTMLElement) {
        target.innerHTML = '';
    },
}
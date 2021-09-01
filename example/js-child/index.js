const scopeV2 = window['NAVSPA-V2'] = window['NAVSPA-V2'] || {};

const application = {
    mount(element, props) {
        element.innerHTML = '';

        const header = document.createElement('h2');
        header.innerText = `From js-child: ${props.name}`;
        element.appendChild(header);
    },
    unmount(element) {
        element.innerHTML = '';
    }
}

scopeV2['js-child'] = application;
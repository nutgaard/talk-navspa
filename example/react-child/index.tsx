import * as React from 'react';
import NAVSPA from '@navikt/navspa';

interface Props {
    name: string;
}

function Application(props: Props) {
    return (
        <h2>From react-child: {props.name}</h2>
    )
}

NAVSPA.eksporter<Props>('react-child', Application);
import { hot } from 'react-hot-loader/root';
import * as React from 'react';


export function HeaderCompotent() {
    return (
        <header>
            <h1>Reddit for our own</h1>
            <p>Hello there!</p>
        </header>
    );
};

export const Header = hot(HeaderCompotent);
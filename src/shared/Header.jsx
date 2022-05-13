import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.less';


export function HeaderCompotent() {
    console.log(styles, styles.example);
    return (
        <header>
            <h1 className={styles.example}>Reddit for our own</h1>
        </header>
    );
};

export const Header = hot(HeaderCompotent);
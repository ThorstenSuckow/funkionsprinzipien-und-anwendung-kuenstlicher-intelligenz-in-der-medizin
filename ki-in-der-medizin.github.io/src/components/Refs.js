

import React from 'react';

function Bibliography ({children}) {
    const href = `/docs/literaturverzeichnis#${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">{children}</span>]</a>
    );
}

function Equation ({children}) {
    return (
        <p class={"mathEq"}>{children}</p>
    );
}

function Footnote ({children}) {
    return (
        <sup><a name={`F_${children}`} href={`#S_${children}`}>[{children}]</a></sup>
    );
}

function Subnote ({children}) {
    return (
        <sup><a name={`S_${children}`} href={`#F_${children}`}>[{children}]</a></sup>
    );
}

export {Bibliography as R};
export {Subnote as S};
export {Footnote as F};
export {Equation as EQ}

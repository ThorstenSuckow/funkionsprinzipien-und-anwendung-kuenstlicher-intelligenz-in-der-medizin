

import React, {useEffect, useState} from 'react';

function Bibliography ({children}) {
    const href = `/docs/literaturverzeichnis#${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">{children}</span>]</a>
    );
}

let gIdEq = 1;
let eqMain = 1;

function initEq({main}) {
    eqMain = main;
    gIdEq = 1;
}

function Table ({children, id}) {

    return (
        <div class={"tbl"}>
            {children}
       </div>
    );
}
function Definition ({children, id}) {

    const [initial, setInitial] = useState(true);
    const [count, setCount] = useState(gIdEq)

    React.useEffect(() => {
        setCount(gIdEq++);
    }, [initial]);


    return (
        <div class={"defParent"}>
            <div class={"def"} style={{flex:1}}>
                {children}
            </div>
            <div class={"idEq"}>{id !== undefined ? `(Def. ${id ? id : eqMain + (count ? "." + count : "")})` : ""}</div>
        </div>
    );
}

function Equation ({children, id}) {

    const [initial, setInitial] = useState(true);
    const [count, setCount] = useState(gIdEq)

    React.useEffect(() => {
        setCount(gIdEq++);
    }, [initial]);


    return (
        <div class={"mathParent"}>
            <div class={"mathEq"} style={{flex:1}}>
                {children}
            </div>
            <div
                className={"idEq"}>{id === "" ? "" : `(Gl. ${id ? id : eqMain + (count ? "." + count : "")})`}</div>
        </div>
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
export {Equation as EQ};
export {Table as Tbl};
export {Definition as Def};
export {initEq};


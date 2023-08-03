

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

function Equation ({children, part}) {

    const [initial, setInitial] = useState(true);
    const [count, setCount] = useState(gIdEq)

    React.useEffect(() => {
        setCount(gIdEq++)
    }, [initial]);


    return (
        <div style={{display:"flex"}}>
            <div class={"mathEq"} style={{flex:1}}>
                {children}
            </div>
            <div class={"idEq"}>{`(Gl. ${eqMain}.${count}${part ? part : ""})`}</div>
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
export {initEq};


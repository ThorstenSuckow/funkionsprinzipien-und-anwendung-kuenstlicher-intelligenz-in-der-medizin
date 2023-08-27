

import React from 'react';
import l8 from "@l8js/l8";
import Gist from "react-gist";
import CodeBlock from '@theme/CodeBlock';
import fetch from 'cross-fetch';


function Plot()
{
    const tiles = [];
    for (let i = 1; i <= 5; i++) {

        for (let a = 1; a <=4; a++) {
            const img = require(`../../docs/kapitel/kuenstliche-neuronen/rosenblatt-perceptron/img/AND/epoch_${i}_${a}.png`).default;
            tiles.push(<Embed figure={""} styles={{float:"left", margin:0, width:"calc(100% / 2)"}} modeAware={false}><img src={img} /></Embed>);
        }
    }

    return <div style={{display:"flow-root"}}>{tiles}</div>
}

function Embed ({width, children, title, figure, modeAware, styles}) {

    return (
        <div style={{margin:20,width, textAlign:"center", ...styles}}>
            <div className={modeAware !== false ? "umlImg" : ""}>{children}</div>
            {figure && <div style={{textAlign:"center"}}>
                <sup ><b>{l8.isString(figure) ? figure : `Abbildung ${figure ?? 1}`}</b> <span dangerouslySetInnerHTML={{__html: title}}></span></sup>
            </div>}
        </div>
    );

}

function GitCode ({id, source, title}) {
    return (<Embed
        modeAware={false}
        title={title}
        figure={`Source ${source}`}
    >
        <Gist id={id} />
    </Embed>);
}

function ImgEmbed ({url, figure, title}) {
    return (<Embed
        modeAware={false}
        figure={figure}
        title={title}
    >
        <img alt="{title}" src={url}  />
    </Embed>);
}


function UmlEmbed ({children, figure, title}) {
    return (<Embed
        modeAware={true}
        figure={figure}
        title={title}
        children={children}
    / >);
};

function MigrationNotice({when, where}) {

    const [name, url] = where;
    return (<div>
        This article was originally published in {when} at <a target="_blank" href={url}>{name}</a>.
        Some formatting might have get lost during the migration to this site:
        If you think you spotted an issue caused by malformed formatting, feel free to open a <a href="https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de">Pull Request</a> or <a href="mailto:thorsten@suckow-homberg.de">send me an Email</a>.
    </div>);

}


function ExternalCodeBlock ({url}) {

    const [code, setCode] = React.useState("");

    fetch(url).then((resp) => {
        resp.text().then((code) => setCode(code)) ;
    });

    return (
        <CodeBlock language="php">{code}</CodeBlock>
    );

}



export {ExternalCodeBlock, Plot, GitCode, Embed, ImgEmbed, UmlEmbed, MigrationNotice};
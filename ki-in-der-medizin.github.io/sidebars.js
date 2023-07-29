
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        {
            type: 'category',
            label: 'Kapitel',
            link: {type: 'doc', id: 'kapitel/index'},
            items: [
                "kapitel/einleitung/index",
                "kapitel/neuron/index"
            ]
        },
        "literaturverzeichnis/index"

        /**
         * +---------------------------
         * |       Guides
         * +---------------------------
         */


    ]
};

module.exports = sidebars;

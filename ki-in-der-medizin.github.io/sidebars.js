
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        {
            type: 'category',
            label: 'Index',
            link: {type: 'doc', id: 'kapitel/index'},
            collapsed: false,
            items: [
                "kapitel/einleitung/index",
                "kapitel/neuron/index",
                {
                    type: 'category',
                    label: '2. Künstliche Neuronen',
                    link: {type: 'doc', id: 'kapitel/kuenstliche-neuronen/index'},
                    collapsed: false,
                    items: [
                        "kapitel/kuenstliche-neuronen/mcculloch-pitts-neuron/index",
                        "kapitel/kuenstliche-neuronen/rosenblatt-perceptron/index"
                    ]
                },
             //   "kapitel/neuronale_netze_und_deep_learning/index",
             //   "kapitel/anwendung_in_der_medizin/index",
                "kapitel/zusammenfassung_und_bemerkungen/index",
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

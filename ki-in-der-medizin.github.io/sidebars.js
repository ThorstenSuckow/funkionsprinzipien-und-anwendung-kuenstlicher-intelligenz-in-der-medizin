
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
                "kapitel/neuron/index",
                "kapitel/neuron_als_mathematisches_modell/index",
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

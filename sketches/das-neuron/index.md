

# Das Neuron

## Einleitung 
Um ein Verständnis für das Modell der im weiteren Verlauf dieser Arbeit beschriebenen _künstlichen neuronalen Netze_ zu erlangen, wollen wir uns zunächst mit dem menschlichen Neuron als "strukturelle und funktionelle Einheit des Nervensystems" [SD07, S.42] beschäftigen.<br /> 
Von Interesse ist für uns die Funktionsweise dieser Zellen im Kontext von Informationsverarbeitung und -weiterleitung, weshalb wir die molekulare und die zelluläre Ebene des einzelnen Neurons betrachten wollen, sowie den Verbund von Neuronen, also dem neuronalen Netz [vgl. Lyr17, S. 2, Abs. 5]. 

Hierzu skizzieren wir zunächst den Aufbau eines Neurons und verschaffen uns im Anschluss einen Überblick über die komplexen biochemischen Vorgänge, die nötig sind, damit Neuronen Signale senden und empfangen können. Wir werden sehen, dass Änderungen der Zellmembran-Eigenschaften (hier: das _Membranpotenzial_) eines Neurons mitverantwortlich sind für die _Exozytose_<sup>[1]</sup> von hemmenden oder erregenden Neurotransmittern in den synaptischen Spalt (s. Abb. X); Rezeptoren postsynaptischer Zellen verarbeiten diese Substanzen dann gemäß ihren _inhibitorischen_<sup>[2]</sup> oder _exzitatorischen_<sup>[3]</sup> Eigenschaften zu inhibitorischen oder exzitatorischen Signalen. 

Da sich diese Arbeit auf die Funktionsweise _künstlicher neuronaler Netze_ konzentriert, verstehen wir im Folgenden unter _neuronales Netz_ ein eben solches. Reden wir von _biologischem neuronalen Netz_, wollen wir darunter ein Netzwerk von Nervenzellen verstehen, in dem ein Informationsaustausch stattfindet - so, wie es im menschlichen Gehirn existiert [vgl. BCP18, S. 113, Abs. 2].

Wir werden im folgenden öfter von präsynaptisch und postsynaptisch lesen. Im KIOntext der Informationsverarbeitung bedeutet präsynaptisch Ursprung der Informationen, postsynaptisch Ziel der Informationen.

Die Betrachtungen berücksichtigen  ausschlißelich den menschlichen Organismus.
Wir betrachten checmischen Synapsen.


## Aufbau

In der folgenden Abbildung haben wir das Neuron in drei Bereiche eingeteilt. Ihre Rolle innerhalb des Neurons ist wie folgt: 1) _Dendrite_<sup>[4]</sup> leiten _afferente_<sup>[5]</sup> Signale zum 2) _Soma_<sup>[6]</sup>, dem Zellkörper, weiter. Unter bestimmten Bedingungen, die in einem späteren Abschnitt erläutert werden, lösen diese Signale ein "feuern" des Neurons aus, und das 3) _Axon_<sup>[7]</sup> leitet ein _efferentes_<sup>[8]</sup> Nervensignal über _präsynaptische Endigungen_ (_Axonterminale_) an (häufig weit entfernte<sup>[9]</sup>) _Effektoren_<sup>[10]</sup> wie Muskeln und Drüsen oder nachgeschaltete Neuronen weiter<sup>[11]</sup><sup>[12]</sup> [vgl. SD07, S. 42, Abs. 2]

<!-- ![](./img/bau-und-funktion-nervenzelle.png) -->


Die eingehende Schnittstelle eines Neurons sind seine **Dendriten**: Baumförmige Fortsätze (einzelne selten länger als 2 mm<sup>[14.1]</sup> [vgl. BCP18, S. 28, Abs. 2]), die um das Soma herum gelagert sind. Diese Dendritenbäume [vgl. BSP18, S.47] fungieren _postsynaptisch_ und empfangen afferente Signale<sup>[13]</sup> in Form von Neurotransmittern [vgl. Eil19, S. 61, "Synapsen"]. Diese werden von Rezeptoren, die sich an den Enden der Dendriten befinden, aufgenommen. Oft stehen tausende Neuronen in Verbindung mit den Dendriten eines einzelnen Neurons<sup>[14]</sup> [vgl. D07, p.42].<br />

Die Dendriten leiten Signale weiter an das **Soma** (oder _Perikaryon_ [vgl. RK18, S. 58, "Aufbau"]), den Zellkörper und das Stoffwechselzentrum des Neurons, der eine Größe von ca. 20 μm<sup>[15]</sup> [BCP18, p.29] besitzt. In der Zelle befindet sich - durch die _Neuronenmembran_<sup>[15.1]</sup> von der Umgebung getrennt - _Zytosol_, eine salzige, wässrige Flüssigkeit mit einem hohen Anteil von Kalium [vgl. BCP18. S.29 "Das Soma"] (s. Tab. 1.1). In dem Zytosol eingebettet sind weitere subzelluläre Strukturen mit eigener Membranbegrenzung, die _Zellorganellen_ [vgl. SD07 S.8, Abs. 2]. Für die nachfolgenden Untersuchungen interessieren uns bei dem Zellkörper aber vor allem die Zellmembran und der _transmembranale Transport_ von Ionen<sup>[15.2]</sup> zur Änderung des Membranpotenzials, insbesondere in der Nähe des **Axonhügels**: Dort entspringt das **Axon**, welches in einer "salzigen extrazellulären Flüssigkeit mit hoher Leitfähigkeit" [PCB18, S. 61, Abs. 1]<sup>[16]</sup> liegt. Hier entscheidet sich, ob das Neuron Informationen weiterleitet: Die Summation der durch die postsynaptischen Endigungen einhergehenden Signale kann eine Depolarisation<sup>[17]</sup> der Membran an dieser Stelle [vgl. Eil19, S. 61, "Soma"] über einen gewissen **Schwellenwert** bewirken, so das ein **Aktionspotenzial**<sup>[18]</sup> ausgelöst wird [vgl. BCP18, S. 142 f.]. Dadurch wird in den präsynaptischen Endigungen die Exozytose ausgelöst. 


-------------
<sup>[1]</sup> _Exozytose_ beschreibt den Vorgang, bei dem zellinnere Substanzen nach Außen weitergegeben werden. Wir kommen im Abschnitt über  synaptische Übertragung darauf zurück.<br />
<sup>[2]</sup> "_inhibere_" (lat.): anhalten<br />
<sup>[3]</sup> "_excitare_" (lat.): erregen, anregen<br />
<sup>[4]</sup> "_δένδρον (dendrón)_": (altgriechisch): Baum<br />
<sup>[5]</sup> "_afferre_" (lat.): herbeibringen, melden, bringen<br />
<sup>[6]</sup> "_σῶμα (sõma)_" (altgriechisch): Körper<br />
<sup>[7]</sup> "_axon_" (lat.): Achse<br />
<sup>[8]</sup> "_efferre_" (lat.): hinaustragen, mitnehmen<br />
<sup>[9]</sup> Axone können sich im menschlichen Körper über Entfernungen von bis zu über 1m ausstrecken [vgl. BCP18, S. 28, Abs. 2]; [BLS] <br />
<sup>[10]</sup> "_efficere_" (lat.): bewirken, hervorbringen<br />
<sup>[11]</sup> in diesem Fall empfangen _postsynaptische Rezeptoren_ an den Dendriten des nachgeschalteten Neurons ein Signal und der beschriebene Prozess wiederholt sich. <br />
<sup>[12]</sup> etwas bildlicher können wir uns Effektoren als Endglied der Signalübertragung vorstellen, auch wenn hier wieder interzelluläre Vorgänge stattfinden. Vgl. "neuromuskuläre Endplatte" [BCP18, S. 127, Abs. 3] <br />
<sup>[13]</sup> aufgrund der signalempfangenden Eigenschaften und der dünnen Spitzen der Dendriten liegt der Vergleich mit "Antennen" nahe [vgl. BCP18, S. 28, Abs. 2] <br />
<sup>[14]</sup> das menschliche Gehirn besitzt mindestens $10^11$ Neuronen [vgl. KSJ+13, S. 175, Abs. 2]<br />
<sup>[14.1]</sup> [Eil19, S. 58, "Polarisierung"] nennt für die "Dendritenlänge kortikaler Pyramidenzellen" eine Länge von 1 cm <br />
<sup>[15]</sup> ein menschliches Haar hat einen Durchmesser von ca. 70 μm, kleine Bakterien bis zu 20 μm [WEmb] <br />
<sup>[15.1]</sup> Membrandicke ca. 5 nm ([BLS19], Seite 66, letzter Absatz linke Spalte) <br />
<sup>[15.2]</sup> hier: der Austausch von Ionen zwischen dem intra- und extrazellulären Raum durch Kanäle und Pumpen. Als **Ion** bezeichnet man ein elektrisch geladenes Atom oder Molekül.<br />
<sup>[16]</sup> [BCP18, p.43, Abs. 1] führt das Axon metaphorisch mit einer Telefonleitung zusammen <br />
<sup>[17]</sup> Depolarisation bezeichnet die Verringerung des Membranpotenzials  [vgl. RHN+16, S. 812 "Neurotransmitter und ihre Rezeptoren"], bspw. von einem negativen Wert auf einen weniger negativen oder gar einen positiven Wert<br />
<sup>[18]</sup> der formale Begriff für das Signal, das zu den Axonterminalen gesendet wird <br />

----------

### Membranpotenziale des Neurons

Ein Neuron weist in Ruhe<sup>[19]</sup> eine ungleiche Ionenverteilung zwischen der durch die Zellmembran getrennten intrazellulären Flüssigkeit (_IZF_, Zytosol) und der extrazellulären Flüssigkeit (EZF) auf. In der IZF befinden sich mehr positiv geladene Natrium-Ionen ($Na^+$), und im EZF mehr positiv geladene Kalium- und Calcium-Ionen ($Ka^+$ und $Ca^{2+}$) sowie mehr negativ geladene Chlorid-Ionen ($Cl^-$). 

| Ion  | Konzentration EZF (mmol/l) | Konzentration IZF (mmol/l) | Verhältnis |
|------|----------------------------|-------------------|------------|
| $K^{+}$   | 5                          | 100               | 1 : 20     |
| $Na^{+}$  | 150                        | 15                | 10:1       |
| $Ca^{2+}$ | 2                          | 0,0002            | 10000 : 1  |
| Cl-  | 150                        | 13                | 11,5 : 1   |
Tabelle 1.1 Ionenkonzentration eines Neurons in Ruhe (nach [BCP18], S.75, Abb.3.15)

Das Membranpotenzial des Neurons wird durch die Verteilung von Ionen in der IZF und EZF bestimmt: In der Membran befinden sich **Ionenkanäle**, von denen viele _selektiv permeable_<sup>[21.1]</sup> sind, d.h., sie lassen nur bestimmte Ionen durch (_Ionenselektivität_)<sup>[22]</sup> (vgl. [BCP18], S 66., Abs. 3). Viele dieser Kanäle können über Änderungen in der Umgebung des Neurons geöffnet oder geschlossen werden (**Gating**, [KSJ+13], S.108, 2. Abs. rechte Spalte)). <br />
Neben den Ionenkanälen existieren auch **Ionenpumpen** ("**ATPasen**"<sup>[23]</sup>, [SD07], S. 26, 2. Abs), die für die Aufrechterhaltung der Ionenverteilung zuständig sind: die $Ca^{2+}$- und $Na^{+}$-$K^{+}$-ATPasen sorgen dafür, daß im Neuron laufend  $Ca^{2+}$ und $Na^{+}$ aus und $K^{+}$ in die Zelle gepumpt wird (vg. [SD07], S. 44). Zusammen mit den selektiv permeablen Ionenkanälen entstehen so die Ionenkonzentrationen in Tabelle 1.1.

Wenn auf das Neuron kein _postsynaptisches Potenzial_ (**PSP**) wirkt und das Neuron kein Impuls abgibt, liegt das Ruhepotenzial $V_r$ der Zelle zwischen -70 mV und -90 mV (vgl. [SD07] S. 47, Tafel 2.3 A.1)<sup>[20]</sup>: Das Zytosol weist entlang der Membranoberfläche im IZF eine negative Ladung auf (vgl. [BCP18], S.61, Abs.3)<sup>[20.1]</sup>. Diese _Membranspannung_ $V_m$ wird durch eine ungleiche Ionenverteilung bewirkt (vgl. [FE19], S.66, "Diffusionspotenzial – elektrische Spannung über der Zellmembran"), verursacht durch die Ladung der Teilchen im IZF und EZF in Membrannähe<sup>[19.1]</sup>: "Die negativen Ladungen im Inneren des Neurons und die positiven Ladungen außerhalb des Neurons ziehen sich in Richtung Zellmembran gegenseitig an, [...] Dementsprechend ist die negative Nettoladung im Inneren der Zelle nicht gleichmäßig im Cytosol verteilt, sondern an der Innenseite der Membran lokalisiert" ([BCP18], S. 72, Punkt 2.)


![](./img/membranladung.png)
Abbildung 1.2: Die Verteilung von Ionen im Zytosol und der EZF. Aufgrund der elektrostatischen Anziehungskraft ziehen sich Anionen und Kationen<sup>[23.1]</sup> in der Nähe der Membran gegenseitig an, es kommt zu einer negativen Spannung in Membrannähe (zwischen -70 mV -90 mV in Ruhe).

In Ruhe ist die Leitfähigkeit der Membran für $Na^{+}$ gering, für $K^{+}$ hingegen hoch (vgl. [SD07] S.44 f.). $K^{+}$-Ionen folgen ihrem Konzentrationsgradienten<sup>[19.2]</sup> und gelangen über die Ionenkanäle in den EZF, bis die Potenzialdifferenz entlang der Neuronenmembran ausströmende $K^{+}$-Ionen zurückhält: Wenn diese Differenz den Konzentrationsgradienten für $K^{+}$ kompensiert, erhält man das **Gleichgewichtspotenzial**<sup>[19.3]</sup> (vgl. [BCP18], S.72 f., [SD07], S. 44 f.). Das Wert des Membranpotenzial nähert sich dem Wert des Gleichgewichtspotenzial desjenigen Ions an, für den die Membran besonders permeabel ist (vgl. [KSJ+13], S. 145, Ende) <sup>**(S1.1)**</sup>.<br />
Das Gleichgewichtspotenzial lässt sich das für individuelle Ionen mit der Nernst-Gleichung<sup>[24]</sup> ermitteln (vgl. [BLS19], S. 67, "Nernst-Gleichung"):

$E_{Ion} = 2,303\begin RT \\ \hline  zF\end log_{10} \begin [Ion]_{EZF} \\ \hline [Ion]_{IZF} \end$

Wobei (vgl. [BCP18], S. 74, Exkurs 3.2):

| Variable / Konstante       | Bedeutung                                                                                  |
|-----------|--------------------------------------------------------------------------------------------|
| $E_{ion}$<sup>[25]</sup>          | Gleichgewichtspotenzial für das jeweilige Ion                                              | 
| $R$  | Gaskonstante                                                                               | 
| $T$ | absolute Temperatur                                                                        | 
| $z$       | Ladungszahl des Ions                                                                       | 
| $F$       | Faraday-Konstante (elektrische Ladung eines Mols einfach geladener Ionen<sup>[24.1]</sup>) | 
| $Ion_{EZF}$       | Ionenkonzentration außerhalb der Zelle                                                     |
| $Ion_{IZF}$       | Ionenkonzentration innerhalb der Zelle                                                     | 

Für eine Körpertemperatur von 37° lässt sich die Nernst-Gleichung für das Gleichgewichtspotenzial $E_K$ wie folgt vereinfachen:

$E_K = 61,54 mV * log_{10} \begin [K^+]_{EZF} \\ \hline [K^+]_{IZF} \end$

Mit den Werten aus Tabelle 1.1 ergibt sich somit $E_K = 61,54 mV * log_{10} \begin 1 \\ \hline 20 \end = -80 mV$

Wie wir oben gesehen haben, liegt $V_r$ zwischen -70 mV und - 90mV. Wie können wir jetzt auf **(S1.1)** schließen, also dass das Ruhepotenzial durch die Membranpermeabilität von $K^{+}$ bestimmt wird, wenn $V_r = -70 mV$, aber $E_K = -80 mV$, und die Membran auch noch für andere Ionen wie bspw. $Na^{+}$ selektiv permeabel ist (vgl. [BCP18], S. 77 f. sowie [SD07] S. 44 "Warum ist $E_m$ weniger negativ als $E_K$?")? Wäre die Membran nur für $K^{+}$ permeable, so läge $V_r$ sicher bei $E_k$ (vgl. [SD07] S.32 Abs. 4).<br />
Wir wir gesehen haben, besitzt die Membran Ionenkanäle und Ionenpumpen. Ionenkanäle unterstützen einen _passiven Transport_ der Ionen zwischen EZF und IZF entlang des Konzentrationsgefälles (vgl. [BLS19] S.30, "Aktive und passive Transportmechanismen"), während Ionenpumpen, die entgegen des Konzentrationsgefälles arbeiten, _aktiv transportieren_<sup>[26]</sup>. Die Ionenpumpen sind für die Ionenkonzentrationsgradienten verantwortlich (vgl. [BCP18], S.76 F.) und es wird ein nicht unwesentlicher Teil von Energie zur Aufrechterhaltung dieser Gradienten verbraucht<sup>[27]</sup>.
Um $V_r$ zu berechnen müssen also die Ionen mitberücksichtigt werden, für die die Membran durchlässig ist. <br />
Dies erfolgt durch die **Goldmangleichung**<sup>[28]</sup>, die zusätzlich für die Berechnung des Membranpotenzials $V_m$  die Permeabilität der MEmbran für einzelne Ionen berücksichtigt. Allerdings ist zu beachten, "dass die Permeabilitäten in komplizierter Weise von der Membranspannung und den Ionenkonzentrationen [...] abhängen und sich meist nur näherungsweise bestimmen lassen." ([BLS19], S.67, Goldman Gleichung).
[SD07] nutzt für die Bestimmung von $V_{m} die fraktionelle Leitfähgkeiten der involvierten Ionen und rechnet

$E_{m} = E_{k} * f_{K} + E_{Na} * f_{Na} + E_{Cl} * f_{cl}$

(vgl. [SD07] S. 32 Gl. 1.21)




-------------------
<sup>[19]</sup> vgl. **Mempranpotenzial**: "die Spannung an der Nervenzellmembran zu einem beliebigen Zeitpunkt" [BCP18, S.70, "Ionen als Grundlage des Ruhepotenzials"]; **Ruhepotenzial**: "the electrical potential across the membrane in the absence of signaling" [KSJ+13, S. 126] <br />
<sup>[19.2]</sup> unter der Diffusion ("_diffundere_" (lat.): zerstreuen, ausbreiten) von Molekülen versteht man den Prozess, wenn Moleküle entlang eines Konzentrationsgradienten (auch: Konzentrationsgefälles) ein Ausgleich der Konzentrationsunterschiede anstreben. Moleküle in hoher Konzentration diffundieren dann in die Bereiche mit niedriger Konzentration: In den hier betrachteten Beispielen diffundieren bspw. $K^+$-Ionen, bis das Gleichgewichtspotenzial erreicht ist<br />
<sup>[19.3]</sup> "the equilibrium potential of any ion that is present on both sides of a membrane permeable to that ion " ([KSJ+13], S.130, letzter Abs., linke Spalte)
<sup>[20]</sup> [BCP18, S.70, "Ionen als Grundlage des Ruhepotenzials"] gibt -65 mV an (1 mV = 0,001 V). Die Autoren gehen hierbei von einer 40-mal so hohen Ionenpermeabilität für $K^{+}$ gegenüber $Na^{+}$ aus berücksichtigen Cl- nicht in der Goldman-Gleichung (vgl. [BCP18], S. 74, Exkurs 3.2). <br />
<sup>[20.1]</sup>Das Membranpotenzial $V_m$ ergibt sich als die Differenz der Spannungen $V_{IZF}$ und $V_{EZF}$, wobei $V_{IZF}$ die Spannung im IZF und $V_{EZF}$ die Spannung im EZF ist. $V_r$ ist dann gleich zu $V_{IZF}$, da nach Konvention<sup>[21]</sup> die Spannung im EZF als $0$ definiert ist (vgl. [KSJ+13] S. 127, rechte Spalte, 2. Abs.).<br />
<sup>[21]</sup> vorausgesetzt, die Zelle ist in Ruhe <br />
<sup>[21.1]</sup> "_permeare_" (lat.) durchwandern <br />
<sup>[22]</sup> Kaliumkanäle sind durchlässig für $K^{+}$ Ionen, Natriumkanäle durchlässig für $Na^{+}$ Ionen usw. <br />
<sup>[23]</sup> Adenosintriphosphasen - Enzyme, die ATP in ADP und Phosphat aufspalten [QUELLE] <br />
<sup>[23.1]</sup>Anion: negativ geladenes Ion; Kation: positiv geladenes Ion  <br />
<sup>[24]</sup> Walther Nernst (1864 - 1941), dt. Physiker und Chemiker, gehört zu den Begründern der physikalischen Chemie [Wern] <br />
<sup>[24.1]</sup>  1 Mol = $6.02214076e10^{23}$ Teilchen<br />
<sup>[25]</sup> $E$ steht für _Equilibrium_: "Gleichgewicht" (lat. aequus "gleich", libra lat. "Waage/Gewicht")<br />
<sup>[26]</sup> hierfür wird metabolische Energie verbraucht (vgl [BLS19], S. 31, "Primär aktiver Transport")<br />
<sup>[27]</sup> Die Natrium-Kalium-Pumpe verbraucht laut [BCP18], S. 76, 1. Abs., etwa 70 % der ATP-Menge (siehe auch <sup>[23]</sup>), die das Gehirn benötigt.<br />
<sup>[28]</sup> auch: **Goldman-Hodgkin-Katz-Gleichung** (GHK-Gleichung) nach David Eliot Goldman (1910–1998), Alan Lloyd Hodgkin(1914 - 1998) und Bernard Katz (1911 - 2003). Hodgkin erhielt 1963 zusammen mit Andrew Fielding Huxley (1917 - 2012) und John Carew Eccles (1903–1997) den Medizin-Nobelpreis für ihre Erforschungen der Ionen-Mechanismen, die bei der Erregung und Hemmung von Nervenzellmembranen beteiligt sind [DMW63]
---------------------

### Das Axon: Axonhügel, Axon  und Axonterminal


Wenn durch Ionenkanäle und ATPasen eine Änderung der Ionenkonzentration erfolgt (bspw. durch EPSP, siehe "Aktionspotenzial"), ist somit auch eine Spannungsänderung der Membran möglich.


[BCP18, p.111] verweist auf die initiationszone, woraus auch ghervorgeht, daß die membran an den dendriten ein höheren Schwellenwert hat, also nicht so schnell zu depolarisieren ist



These four properties of the action Potenzial—
initiation threshold, all-or-none nature, conduction
without decrement, and refractory period [KSJ+13, S. 149]


Afferente und efferente Axone
Die Besprechung des PNS ist eine gute Gelegenheit, zwei Begriffe einzuführen, die zur
Beschreibung von Axonen im Nervensystem verwendet werden: afferent („hinbringen“)
und efferent („wegbringen“) sind aus dem Lateinischen abgeleitet und geben an, ob Axone Informationen zu einem bestimmten Ort transportieren oder von dort holen. Betrachten
wir die Axone des PNS im Verhältnis zu einem Bezugspunkt im ZNS. Die somatischen
oder viszeralen sensorischen Axone, die Informationen zum ZNS bringen, sind viszeroafferent, die Axone, die aus dem ZNS herausgehen und zu den Muskeln und Drüsen führen,
sind viszeroefferent. [BCP18, S. 197, "Afferente udn efferente Axone"]

> Da sich Axone im Körper über große Entfernungen erstrecken können (1 m oder mehr), [BCP18, S. 28, Abs. 2]



### MembranPotenzial
Das MEmpranPotenzial (im folgenden $E_m$) oder auch RuhePotenzial ist das Potenzial einer erregbaren Zelle in Ruhe, also Zellen, die momentan weder inhibitorisch oder exzitatorisch beeinflußt werden und deshalb keine Impulse erzeugen [BCP18, p.61]. Es liegt laut [SD07, p.44] je nach Zelltyp zwischen −100 und −50 mV: Bei den hier betrachteten Neuronen dürfen wir von einem RuhePotenzial von -65 mV ausgehen. [BCP18, p.70], [SD07 sagt -70- -90, p. 47] Das membranPotenzial entsteht  durch eine ungleiche Ionenverteilung VErteilung zwischen der intrazellulären und der extrazellulären Flüssigkeit [SD07, p.44], wobei die das Zytosol **Entlang der MEmbranoberfläche** im im intrazelllulären Raum im Verhältnis zum EZF eine negative Ladung aufweist. [BCP18, p.61]: Die durch die Membran von dem EZF und dem IZF weisen die gleiche Anzahl gelöster Stoffe auf (isotoniosch), allerdings haben wir eine ungleichmäßige Verteilung von $K^{+}$ und $Na^{+}$ Ionen: Im EZF haben wir mehr NA Ionen als KA Ionen sowie mehr CA+ Ionen (NA: 150 mmol/kg H_2O, 15mmol IZF; 5 zu 100; Ca+ 2 zu 0,0002 [BCP18, p.75, Abb.3.15]). 

Die Membran ist durchzogen von Ionenkanaäle, die selektiv permeable für Ionen sind (Ionenselektivität [BCP18, p 66.]): So sind Kaliumkanäle durchlässig für Ka+ Ionen, Natriumkanaäle durchlässig für NA Ionen. Die Kanäle sind in einem geöffneten oder geschlossen Zustand, was durch Änderungen in der lokalen Mikroumgebung der Membran gesteuert werden kann. [BCP18, p 66.] Ein Konzentrationsgradient zur Aufrechterhaltung eines Konzentrationsgradientent, der für die Anzahl der $Na^{+}$ und Ka+ Ionen IZ und EZ zuständig ist [SD07, p.44], übernehmen Natrium-Kalium-Pumpen (ATPasen [SD07 p. 26])

Der Wert des RuhePotenzials ergibt sich nun


Das RuhePotenzial wird später bei der Betrachtung des AktionsPotenzials eine bedeutende Rolle spielen: Die Depolarisation des RuhePotenzials ist für ein Neuron der Anstoß, um Signale zu weiterzuleiten. Erwähnenswert ist im übrigen, dass zwar alle lebenden Zellen ein MembranPotenzial aufweisen, aber nur erregbare Zellen (wie nerven oder Muskelzellen dazu in der Lage sind, die "IOonenleitfähigkeit ihrer Membran auf einen Reiz hin stark zu verändern" [SD07, p. 44]. 

### SchwellenPotenzial und AktionsPotenzial

> Der Aufstrich des Aktionspotenzials lässt sich durch einen Natriumeinstrom erklären, die
fallende Phase durch einen Kaliumausstrom. Das Aktionspotenzial ist also einfach auf die
Bewegung von Ionen durch Kanäle zurückzuführen, die durch Veränderungen des Membranpotenzials gesteuert werden. [BCP18, p.96]

> Schwellenwert. Der Schwellenwert ist das Membranpotenzial, bei dem sich genügend
spannungsabhängige Natriumkanäle öffnen, sodass die relative Ionenpermeabilität der
Membran für Natrium- größer als für Kaliumionen ist [BCP18, p.103] 

> Aufstrich. [Depolarisationsphase SD07, p.46] Wenn die Innenseite der Membran ein negatives elektrisches Potenzial aufweist, gibt es eine starke elektrochemische Triebkraft für NaC-Ionen. Deshalb strömen
NaC-Ionen durch die geöffneten Natriumkanäle schnell in die Zelle und verursachen
dort eine rasche Depolarisation.  [BCP18, p.103]

> Außerdem sorgt die $Na^{+}$
-$K^{+}$
-ATPase
( S. 26) dauernd für die Wiederherstellung
der ursprünglichen Ionenkonzentrationen
( S. 46) [SD07, p.46]

 
der selektive $Na^{+}$ Ionenkanal öffnet sich bei Veränderung des elektrischen MembranPotenzials. [BA18, p97, weitergehende Erklärungen zu der Funktionsweise des Spannunsgssensors dieses Kanals auch auf dieser Seite]

Die Membran wird depolarisiert, so dass die Ionenkanaäle öffnen und $Na^{+}$ in die Zelle eindringt. Dringen genug Zellen in das ZI, wird das Neuron depolarisiert 

Das MembramPotenzial kann über komplexe Vorgänge durch den Austausch von Ka+ und $Na^{+}$ Ionen verstehen. Man klann sich das so vorstellen, dass eine Mebran in Ruheszustand für NatriumIonen imperable ist für EZF $Na^{+}$ Ionen weniger durchlässig ist, und das Ruhepotenzial durch die ungleiche Verteilung von $Na^{+}$ und Ka+ Ionen (UZF und EZF) bedingt ist. Durch entsprechende positive  Reize wird die Membran pereabel durchlässig für die NatriumIonen, die nun in das Zellinnere strömen könen und eine Verschiebung des Mebranpotenzials erwirken. Es findet eine Depolarisation statt,. Öffnen sich genug Natriumkanaäle, und wird der Schwellenwert des Axonhügels überschritten, findet ein AktionsPotenzial statt. das sich entlang des Axons fortpflanzt und letztendlich am Axonterminal für die Exozytose von Neurotransmittern sorgt.

### Alles oder Nichts Prinzip






Die Änderung des MembranPotenzials geschieht, wenn die Membran ihre Durchlässigkeit verändert und von dem impereablen Zustand (Ruhezustand) exzitatorisch erregt wird: Kommen bei dem Neuron entsprechende positive Ladungen an, Signale an, Dies geschieht mit hilfe der Natrium Kaium Pumpe, die einen $Na^{+}$/Ka+ Austausch zwischen IZF und EZF möglich macht, und somit das Membranpotenzial der Zelle verringert bzw. erhöht. Wir erinnern uns, dass das Innere des Soma aus Cytosol besteht, einer Kaliumreichen flüssigkeit. Der Kaliumgehalt EZF ist dagegen niedriger als der dort befindliche als der  Natriumgehalt. Allerdings kann durch komplexe chemische Vorgänge ein Austaiusch der $Na^{+}$Ka+ Konztentration statfinden, indem sich die Durchklässigkeit der Membran für verschiedene IOnen ändertein Austritt der KA+ und der $Na^{+}$ Ionen stattfinden, so dass sie das MebramPotenzial ändert: Strömen mehr $Na^{+}$ Ionen in das zellinnere, änderts ich das MembranPotenzial hin zum positiven. 


## Synapsen

> 1011 neurons. Thus 1014
to 1015 synaptic connections are formed in the brain. There are 1,000-fold
more synapses in one brain than the 100 billion stars in our galaxy! Fortunately,
only a few basic mechanisms underlie synaptic transmission at these many
connections. [KSJ+13, S. 175]

### Präsynaptische Endigung

### Synaptenspalt

### Postsynaptische Endigung


## Kommunikation


### Neurotransmitter

> Sie sollten sich jedenfalls darüber im Klaren sein, dass derselbe
Neurotransmitter verschiedene postsynaptische Aktivitäten auslösen kann, abhängig davon, an welche Rezeptoren er bindet. [BCP18, S. 148, Abs. 2]

#### Erregende TRansmitter 

#### Hemmende TRansmitter

> Neuronen als hilfreich erwiesen. Inhibitorische Synapsen sind nicht nur über die Dendriten verteilt, sondern kommen bei vielen Neuronen auch gehäuft auf dem Soma und dem
Axonhügel vor. Dort sind sie in einer besonders wirksamen Position, um die Aktivität des
postsynaptischen Neurons zu beeinflussen [BCP18, p.148]

### Transmitterfreisetzeung


# Schluss bemerkung



- Neuron besteht aus dem Zellkörper, Dendriten und dem Axon (Soma bezeichnet alles außer dem Axon s. [HEB49]: Zerllkörper wird auch Perikaryon genannt [RK18, S. 58, "Aufbau"]
-
- Dendriten führt zum Neuron hin, Axon (auch Neurit geannt [SD07, p.43]) führt zum Neuron Weg: Dendrit eingehende Verbindung, Axon ist ausgehende Verbindinung
-
- Übertragung zwischen Neuronen geschieht über Synapsen, über die die Nervenzellen miteinander verbunden sind: zwischen präsynaptischen Endigungen (Acxon)) und den postsynapitschen Zelle (Dendrit) ein Spalte existiert, über den durch Bitenstoffe (Neurotransmitter) die Signale weitergeleitet werden, sofern ein AktionsPotenzial das Schwellenpotenzial des Axonhügels übertroffen hat.
-
- Hierbei wird zwischen exzitatorischen postsynaptischen Potenzial (EPSP )und inhibotoirischem postsynaptischen Potenzial (IPSP) unterschieden: EPSP hat erregende Wirkung, IPSP hemmende (als erregende Transmitter sind bspw. Glutamat bekannt, auch bekant als Geschmacksversärker; Hemmende TRansmitter sind bspw. GABA - Gamma-Aminobuttersäure (GABA), so erhöht bspw. das Medikament Gabapentin den GABA Spiegel[1] und wird zur Behandlung von Anfallsleiden wie der Epilepsie sowie bei Nervenschmerzen (Neuropathien) angewendet[2]
-
[1] https://www.aerzteblatt.de/archiv/20049/Neuropathien-Gabapentin-bremst-ueberaktive-Neurone )
[2]  https://www.gelbe-liste.de/wirkstoffe/Gabapentin_21579


# Abbildungen
 - Nervenzelle [SD07, p.43]




# Das Neuron 
> Eine erregbare Zelle reagiert auf einen Reiz mit einer Änderung ihrer Membraneigenschaften (S. 32). Es gibt zweierlei Typen erregbarer Zellen, nämlich Nervenzellen, die Impulse übertragen und im Zellverband modifizieren können, und Muskelzellen, die sich auf diese Impulse hin oder autonom kontrahieren (S. 42). [SD07, p.42]
> Das Neuron (A1) ist die strukturelle und funktionelle Einheit des Nervensystems.  [SD07, p.42]
> Über die meist baumartig verzweigten Dendriten nimmt das Neuron (fördernde und hemmende) afferente Signale von anderen (oft von tausenden) Neuronen auf und bildet über die Zellmembran des Somas eine Signalsumme.  [SD07, p.42]

## Das Axon
>  Das Axon, das am Axonhügel des Somas entspringt, hat die Aufgabe, das efferente Nervensignal auf häufig weit entfernte Effektoren(Muskel- oder Drüsenzellen) sowie auf nachgeschaltete Neurone zu übertragen. Es gibt in seinem Verlauf oft Äste (Kollateralen) ab, die sich am Ende nochmals aufsplittern. Überschreitet die Signalsumme am Axonhügel einen Schwellenwert, wird im Axon ein Aktionspotenzial abgeschickt (S. 46), das an den Endknöpfen (A1,3) die nächste Synapse(s. u.) erreicht.[SD07, p.42]

# Potenziale

## SchwellenPotenzial: 
Als SchwellenPotenzial bezeichnet man im Zusammenhang mit der Signalübermittlung in Nerven und Muskelfasern jene Potenzialdifferenz, bei der ein AktionsPotenzial ausgelöst wird. (https://de.wikipedia.org/wiki/SchwellenPotenzial, 15.07.2023)

## RuhemembranPotenzial:   
Als RuhemembranPotenzial oder auch knapp RuhePotenzial (abgekürzt RMP bzw. RP) wird das MembranPotenzial von erregbaren Zellen in Ruhe bezeichnet, also bei nicht erregten Nervenzellen oder Muskelzellen. Eine charakteristische, vorübergehende Abweichung vom RuhePotenzial ist beispielsweise das AktionsPotenzial (AP) dieser Zellen bei Erregung. Die als RuhemembranPotenzial bezeichnete Potenzialdifferenz zwischen negativ geladenem Zellinneren und extrazellulärer Umgebung über die Membran beträgt je nach Zelltyp zwischen −100 und −50 mV [SD07, p.44], bei den meisten Nervenzellen rund −70 mV. https://de.wikipedia.org/wiki/RuhemembranPotenzial 15.07.2023
> Die Ursache des Ruhepotenzials ist eine ungleiche Ionenverteilung (B) zwischen der intrazellulären Flüssigkeit (IZF) und der extrazellulären Flüssigkeit (EZF) [SD07, p. 44]
> > Alle lebenden Zellen weisen ein (Ruhe-) Membranpotenzial auf, aber nur die erregbaren Zellen (Nerv, Muskel) haben die Fähigkeit, die Ionenleitfähigkeit ihrer Membran auf einen Reiz hin stark zu verändern: Aktionspotenzial (S. 46) [SD07, p. 44]

## Das Aktionspotenzial
> lan Hodgkin und Andrew Huxley um 1950 durchführten. Die Spannungsklemme
ermöglichte es Hodgkin und Huxley, das Membranpotenzial eines Axons bei jedem beliebigen Wert abgreifen zu können. So konnten sie die Ströme messen, die durch die
Membran flossen, und auf die Veränderungen der Membranleitfähigkeit rückschließen,
die bei verschiedenen Membranpotenzialen auftraten. In einer ausgeklügelten Reihe von
Experimenten konnten Hodgkin und Huxley zeigen, dass der Aufstrich des Aktionspotenzials tatsächlich von einem vorübergehenden Anstieg von gNa und einem Einstrom von
NaC-Ionen herrührt und dass die fallende Phase mit einer Zunahme von gK und einem
Ausstrom von KC-Ionen einhergeht. Ihre Ergebnisse wurden 1963 mit dem Nobelpreis
gewürdigt []

> Das Aktionspotenzial ist das im Axon weitergeleitete Signal und löst am Muskel die Kontraktion aus.  [SD07, p.46]

>  Ursache der Erregung kann z. B. die Öffnung postsynaptischer Kationenkanäle durch Neurotransmitter (S. 50 ff.) oder eine aus der Umgebung weitergeleitete (elektrotonische) Erregung sein (S. 48).
> Nähert sich das Em während der Erregung einem kritischen Wert, dem Schwellenpotenzial (A1), so werden (sog.
schnelle) potenzialgesteuerte $Na^{+}$ -Kanäle aktiviert (B4 und B1⇒B2), d. h. die $Na^{+}$-Leitfähigkeit gNa (S. 32) steigt an (A2) und $Na^{+}$ strömt ein. Wird das Schwellenpotenzial nicht  erreicht, so bleibt es bei dieser „lokalen Antwort“  [SD07, p.46]

> Überschreitet Em das Schwellenpotenzial, so startet ein Aktionspotenzial (AP, A1), das normalerweise als „Alles-oder-Nichts-Antwort“ abläuft, d. h. in der für diese Zellart typischen Weise ohne Rücksicht darauf, wie groß
der auslösende Reiz war [SD07, p.46]

> Die Entladungsrate nimmt zwar mit der Stärke des depolarisierenden Stroms zu, aber die
Frequenz, mit der ein Neuron Aktionspotenziale erzeugen kann, ist begrenzt. Die maximale Entladungsrate liegt bei etwa 1000Hz. [BCP18, p.98]

## Synapse
> Die Synapse (A3) ist die Kontaktstelle des Axons einer Nervenzelle mit den Effektoren oder einem anderen Neuron (s. a. S. 50 ff.). [SD07, p.42]

> Dabei (chemische Übertragung, Anm. Autor) wird durch das elektrische Signal im Axon aus exozytotischen Vesikeln an der präsynaptischen Membran ein Überträgerstoff (Neurotransmitter) freigesetzt, der durch den synaptischen Spalt (10 – 40 nm) zur postsynaptischen Membran diffundiert und dort erneut elektrische Veränderungen bewirkt (A3). Je nach Art des Überträgerstoffes und je nach postsynaptischem Rezeptortyp wird die postsynaptische Membran erregt (z. B. Acetylcholin am Skelettmuskel) oder ihre Erregung gehemmt (z. B. Glycin im ZNS). Da die postsynaptische Membran (mit wenigen Ausnahmen, z. B. S. 346)keine Neurotransmitter ausschüttet, lassen Synapsen das Signal nur in einer Richtung durch, d. h. sie haben Ventilfunktion, ohne die eine geordnete Informationsübertragung nicht möglich wäre. Synapsen sind außerdem der Ort, an dem die neuronale Signalübertragung durch andere (fördernde oder hemmende) Neurone modifiziert werden kann. [SD07, p.42]

> Neuronale Informationen werden über Synapsen vermittelt. Im Wesentlichen setzt sich eine Synapse aus einem prä- und postsynaptischen Anteil mit einer dazwischenliegenden synaptischen Kontaktzone zusammen. [ROH17, p.134]

> Übertragungsmechanismen können elektrisch oder chemisch ablaufen. [ROH17, p.134]

### Elektrische vs chemische Synapsen
> Elektrische Synapsen geben ihre Informationen über kanalartige Proteinkomplexe (Konnexone) weiter, die sich in einem eng aneinander liegenden Bereich („gap junctions“) benachbarter Zellmembranen befinden. Die Übertragung vollzieht sich als Ionenstrom, der in beide Richtungen fließen kann. Solche Synapsen finden sich beispielsweise in Epithel- und Gliazellen. Demgegenüber sind chemische Synapsen in der Lage, sowohl exzitatorische als auch inhibitorische Funktionen zu entfalten. Diese größere Funktionsvielfalt ermöglichen Überträgerstoffe (Neurotransmitter). Sie werden im präsynaptischen Anteil freigesetzt, überwinden den synaptischen Spalt (10-40nm, [SD07, p.42]) und öffnen im postsynaptischen Anteil Ionenkanäle. Damit ändern sie die Leitfähigkeit für Ionen und steuern so den Informationsfluss. Bei chemischen Synapsen ist im Gegensatz zu den elektrischen kein direkter Zellkontakt vorhanden, sondern ein schmaler (synaptischer) Spalt trennt die präsynaptische von der postsynaptischen Membran.  [ROH17, p.134]

> Chemische Synapsen, an denen die Informationsweitergabe durch eine Überträgersubstanz, einen (Neuro-)Transmitter, erfolgt, dienen nicht nur der einfachen 1 : 1-Verbindung, sondern sie sind auch die Schaltelemente des  Nervensystems, an denen die Impulsübertragung gebahnt und gehemmt sowie mit anderen Informationen verrechnet werden kann. An der chemischen Synapse setzt das im Axon eintreffende Aktionspotenzial (AP; A1,2 u. S. 48) den Transmitter (u. U. auch mehr als einen) aus den präsynaptischen Axonendigungen frei; er diffundiert dann durch den schmalen synaptischen Spalt (ca. 30 nm), um postsynaptisch an Rezeptoren der subsynaptischen Membran eines Neurons, einer Drüsen- oder einer Muskelzelle gebunden zu werden. Je nach Art von Transmitter und Rezeptortyp kann dadurch die postsynaptische Membran erregt oder deren Erregung gehemmt werden (s. u.)[SD07, p50]

## Neurotransmitter 
> Synapsen werden zwar nach ihrem Haupttransmitter benannt, jedoch sind präsynaptisch in der Regel mehrere Transmitter (Kotransmitter) vorhanden, die die Synapsenfunktion zusätzlich beeinflussen. Entsprechend den in ihnen hauptsächlich wirksamen Transmittern sind unterschiedliche funktionelle neuronale Systeme bekannt. Diese Neurotransmittersysteme (s. ▶Tab. 6.20) üben inhibitorische, exzitatorische und/oder neuromodulatorische Funktionen aus. Sie besitzen weitverzweigte
Projektionen in unterschiedlichen Abschnitten von Gehirn und Rückenmark. Störungen von Neurotransmittersystemen sind bei vielen neurologischen Krankheitsbildern vorhanden.Klinisch bedeutsam ist dabei u. a. die Möglichkeit, Transmittersysteme pharmakologisch zu beeinflussen. [ROH17, p.134]

> Die werden innerhalb von Neuronen synthetisiert, sind präsynaptisch in erhöhter Konzentration vorhanden, bewirken (endogen freigesetzt oder exogen zugeführt) einen postsynaptischen Effekt und werden durch ein auf sie abgestimmtes System im synaptischen Spalt inaktiviert. Die von einem Neurotransmitter entfaltete Wirkung ist eine Funktion des postsynaptischen Rezeptors. Deshalb kann ein Neurotransmitter abhängig vom jeweiligen (postsynaptischen) Zellrezeptor inhibitorische und/oder exzitatorische Reaktionen hervorrufen. [ROH17, p.134]

### Erregende Tansmitter
> Der Kationeneinstrom führt zur Depolarisation: exzitatorisches postsynaptisches Potenzial (EPSP) (max. ca. 20 mV; B). [SD07, p.52]

> Ein einzelnes EPSP vermag gewöhnlich kein axonales AP (APA) auszulösen, sondern es bedarf dazu vieler gleichzeitig an den Dendriten ausgelöster lokaler Depolarisationen, die über das Soma elektrotonisch weitergeleitet (S. 48) und am Axonhügel aufsummiert werden: Räumliche Summation (B). Treffen die Einzelreize zeitlich getrennt (innerhalb von ca.
50 ms) ein, so ist die vorausgegangene Depolarisation noch nicht abgeklungen und die nächste propft sich darauf auf, so dass das
Schwellenpotenzial leichter erreicht wird, d. h. die Erregbarkeit des postsynaptischen Neurons wird durch diese zeitliche Summation erhöht (C) [SD07, p. 52]

### Hemmende Transmitter
> Hemmende Transmitter sind z. B. Glycin und GABA sowie Acetylcholin (M2- und M3- Rezeptor an M-cholinergen Synapsen;  S. 82). Sie erhöhen an der subsynaptische Membran nur die Leitfähigkeit (g) für $K^{+}$ (z. B. der metabotrope GABAB-Rezeptor) oder für Cl–
(z. B. die ionotropen Glycin- und GABAA-Rezeptoren;  F). Die Membran wird dadurch meist etwas hyperpolarisiert, bei erhöhter gK
deswegen, weil sich das Em dem EK nähert ( S. 44). Dieses inhibitorische postsynaptische Potenzial (IPSP) (max. ca. 4 mV;  D) wirkt aber weniger durch seine – der Depolarisation des EPSP entgegenlaufende – Hyperpolarisation (das IPSP kann sogar selbst leicht depolarisierend sein), sondern dadurch, dass die während des IPSPs erhöhte Membranleitfähigkeit die elektrotonischen Ströme der EPSPs kurzschließt (gK oder gCl hoch!). Da sowohl EK als auch ECl nahe dem Ruhepotenzial liegen
( S. 44), wird dieses stabilisiert, d. h. die EPSPs werden durch hohe $K^{+}$ - und Cl–-Kurzschluss-Ströme unwirksam gemacht. Die Depolarisation der EPSPs ist daher kleiner und   die Erregung des postsynaptischen Neurons somit gehemmt [SD07, p.52]

### Transmitterfreisetzung
> Die Transmitterfreisetzung (A1) erfolgt durch regulierte Exozytose sog. synaptischer Vesikel. Jedes davon enthält ein sog. TransmitterQuantum; im Falle der motorischen Endplatte (S. 56) sind dies ca. 7000 Moleküle Acetylcholin. Ein Teil der Vesikel ist bereits an der Membran angedockt („aktive Zone“) und steht zur Exozytose ihres Inhalts bereit. Signal für
die Freisetzung ist ein eintreffendes AP (A1,2), und je höher die AP-Frequenz im Axon ist, desto mehr Vesikel setzen ihren Inhalt frei. [SD07, p.50]




 - nm: Nanometer, 1 Millionstel Millimeter 
 - VEntilfunktion: Information fließen geordnet in eine Richtung [SD07, p. 42]
 - inhibitorisch: hemmend
 - exzitatorisch: erregend
 - Exozytose
> Bei der Exozytose werden Substanzen von der Zelle nach draußen abgegeben. Dabei verschmelzen Vesikel mit der Plasmamembran und entleeren ihren Inhalt in den extrazellulären Raum. Dies geschieht kontinuierlich (konstitutiv) oder auf ein Signal hin (getriggert). [RHN+16, p.368]
 - Vesikel: sind sehr kleine, in der Zelle gelegene, rundliche bis ovale Bläschen, die von einer doppelten Membran oder einer netzartigen Hülle aus Proteinen umgeben sind. "Vesikel sind für den Transport vieler Stoffe in der Zelle verantwortlich." [https://de.wikipedia.org/wiki/Vesikel_(Biologie), 14.07.2023]
 - Alles-oder-nichts-Antwort
 "An dem Parameter Stärke der Reaktion ist keine Abstufung (Differenzierung) zu beobachten" (https://de.wikipedia.org/wiki/Alles-oder-nichts-Gesetz, 14.07.2023)
 - Depolarisation
Verringerung des MembramPotenzials einer Zellmembran; Die Membranspannung kann durch Ausschüttung eines Transmitters depolarisiert werden; bei dem erregenden Potenzial steigt die Spannung in der postsynaptischen Zelle -> Spannung wird positiver, weil die begative Spannung also abnimmt, spricht man von Depolarisierung
- Der Anstieg von [Ca2+]i ist ein Signal für viele
  wichtige Zellfunktionen ( A). Er bewirkt u. a.
  in Muskelzellen deren Kontraktion, in den präsynaptischen Endigungen der Neurone die
  Exozytose von Neurotransmittern [SD07, p36]

   


- Die Langzeitspeicherung im sekundären Gedächtnis gelingt durch
  häufiges Üben: Konsolidierung. Ein Abrufen der
  dort gespeicherten Information geht jedoch relativ langsam. Im sog.tertiären Gedächtnis werden besonders häufig geübte Dinge gespeichert (Schreiben, Lesen, eigener Name), die ein
  Leben lang nicht vergessen werden und trotzdem sehr rasch abrufbar bleiben. [SD07, p.342]
- Korrelat des primären (Kurzzeit-)Gedächtnisse sind
  wahrscheinlich in den Neuronenverbänden kreisende
  Erregungen, während für das Langzeitgedächtnis vorwiegend biochemische Mechanismen ablaufen. Nach
  wiederholter Reizung kommt es zu stunden- bis tagelang anhaltender Verstärkung synaptischer Verbindungen (frühe LTP, long-term potentiation) an den
  Dornen (Spines) der Kortexdendriten (D, oben),
  die schließlich in langfristige, genomische Veränderungen übergehen (späte LTP-Phasen). Dadurch
  wird die synaptische Übertragung an definierten Synapsen verstärkt und der Lernvorgang konsolidiert [SD07, p.342]

# Zusammenfassung
- Nervenzellen zeigen Polarisierung [Eil19, S. 60]
- Eingang -> VErrechnen -> Ausgang [Eil19] S.57
- VErschaltungsmuster [Eil19, S. 59]
- Auf diesen Vorgängen fußt das mathematische Model und die Architektur künstlicher neuronaler Netze [QUELLE?], wie wir in den nachfolgenden Kapiteln sehen werden.
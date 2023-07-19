

# Das Neuron

## Einleitung 
Um ein Verständnis für das Modell der im weiteren Verlauf dieser Arbeit beschriebenen _künstlichen_ neuronalen Netze zu erlangen, wollen wir uns zunächst mit dem menschlichen Neuron als "strukturelle und funktionelle Einheit des Nervensystems" [vgl. SD07, S.42] beschäftigen.<br /> 
Insbesondere wollen wir die Funktionsweise dieser Zellen im Kontext von Informationsverarbeitung und -weiterleitung betrachten.

Hierzu skizzieren wir zunächst den Aufbau einer Nervenzelle und verschaffen uns im Anschluss einen Überblick über die komplexen biochemischen Vorgänge, welche die Signalweiterleitungen von Neuron zu Neuron möglich machen. Hier werden wir sehen, dass die Änderung von Zellmembran-Eigenschaften (hier: das _Membranpotenzial_) eines Neurons mitverantwortlich für die _Exozytose_<sup>[1]</sup> von Neurotransmittern in präsynaptischen Endigungen und deren Freisetzung in den synaptischen Spalt sind, der zwischen den benachbarten Neuronen liegt. Rezeptoren an postsynaptische Endigungen benachbarter Neuronen sorgen dann für die "Verarbeitung" von den ursprünglich _inhibitorischen_<sup>[2]</sup> oder _exzitatorischen_<sup>[3]</sup> Transmittern hin zu inhibitorischen oder exzitatorischen Signalen. Dies wird grundlegend als Inspiration für die Modellierung eines künstlichen neuronalen Netzes in Programmcode und mathematischen Formeln sein.

Da sich diese Arbeit auf die Funktionsweise _künstlicher neuronaler Netze_ konzentriert, verstehen wir im Folgenden unter _neuronales Netz_ ein eben solches. Reden wir von _biologischem neuronalen Netz_, wollen wir darunter ein Netzwerk von Nervenzellen verstehen, in dem ein Informationsaustausch stattfindet - so, wie es im Gehirn existiert [vgl. BCP18, S. 113].

-----
<sup>[1]</sup> _Exozytose_ beschreibt den Vorgang, bei dem zellinnere Substanzen nach Außen weitergegeben werden. Wir kommen darauf zurück, wenn wir uns mit der synaptischen Übertragung beschäftigen<br />
<sup>[2]</sup> "_inhibere_" (lat.): anhalten<br />
<sup>[3]</sup> "_excitare_" (lat.): erregen, anregen
-----

## Aufbau

erständisses der Funktionsweise eines Neurons im späteren Verbund innerhalb eines künstlichen nneuronalen netwzerkes teilen wir das Neuron zunächst grogranular in 3 Teile ein Den Dendriten, die afferente (also hinführende) Signale entgegennehmen und zum Soma, dem Zellkörper des Neurons, weiterleiten, die, einen entsprechenden Summationswert zur Überschreitung eines Schwellwertes, auf den wir im folgenden noch näher eingehen werden, überschreiten müssen, damit über das Axon und seinen präsynaptischen Endigungen (auch Axonterminale [BCP18, p.43] )  eine Weiterleitung der Signale durch chemische Diffusion erfolgt [QUELLE]. 

Zur Erlangung des verständisses der Funktionsweise eines Neurons im späteren Verbund innerhalb eines künstlichen nneuronalen netwzerkes einigen wir uns zunächst darauf, multipolare Neuronen zu betrachten, die aus mehreren Dendriten und einem Axon bestehen [BCP18, p.49]

Die folgende Abbildung stellt schematisch den Aufbau eines solchen Neurons dar. Es folgt Beschreibung der in dieser Abbildung dargestellten Struktur, von der "Baumkrone" (Dendrit, griech. Baum) zu dem Axon und seinen Axonterminal.  ]

### Dendriten
Dendriten bilden die eingehende Schnittstelle eines Neurons und nehmen afferente Signale anderer Neurone entgegen, (oft von tausenden [SD07, p.42]). Diese Signale können sowohl inhibitorisch als auch exzitatorisch sein. Auf Die Bedeutung dieser Signale kommen wir  Abschnitt Synaposen zurück.

### Soma

Das Soma is der Zellkern des Neurons und wird i.d.R. ohne Axon verstanden [QUELLE AR88, Heb49], ein kurgelförmiger Teil des Neurons mit einer Größe von ca. 20 nanometer [BCP18, p.29]. Das Soma besteht im weiteren aus Zellkern und beinhaltet weitere Strukturen (sog. Organellen), auf die wir im näheren nicht eingehen wollen (dem Leser sei [BCP18.] empfohlemn). Wir halten aber fest, das das Innere des Somas eine wässrige Flüssigkeit beinhaltet, die als Cytosol bezeichnet wird, eine kaliumreiche Lösung, die von der Umgebung durch die **Neuronenmembran** getrennt ist [BCP18, p.29], Aus dem Soma geht das Axon hervor.

### Das Axon: Axonhügel, Axon  und Axonterminal
Das Axon beginnt in einem Bereich, den man als Axonhügel bezeichnet, un der den eigentlichen ersten Abschnitt des Axons bildet. [BCP18, p.42] Es iszt ein länglicher Fortsatz und besitzt größen von weniger als 1mm bis hin zu 1m, und fungiert im menschlichen Körper wie eine "Telefonleitung", um Informationen über größere Bereiche zu übertragen. [BCP18, p.43], und liegt in einer salzigen EZ flüssigkeit mit hoher elektrischen Leitfähigkeit [BCP18, p.61].  Umgansgsprachlich dürfen wir das letzte Zitat ergänzen hin zu: Eine Weiterleitung von Informationen geschicht erst, wenn die Information stark genug gewesen ist, um über den Hügel - den Axonhügel zu kommen. Etwas formaler hält [SD07, p.42] fest, dass das Axon die Aufgabe hat" Axonhügel des Somas entspringt, hat die Aufgabe, "das efferente Nervensignal auf häufig weit entfernte Effektoren(Muskel- oder Drüsenzellen) sowie auf nachgeschaltete Neurone zu übertragen"

Der Axonhügel besitzt einen Schwellenwert, der übertroffen werden muß, damit ein Neuron "feuert": Man kann sich das in etwa so vorstellen, als das die Summer der Informationen, die durch die Dendriten empfangen werden (räumlich ode rzeitlich) [räumlich bedeutet mehrere Funken gleichzeitig, zeitlich bedeutet die in einer gewissen Zeitabstand hintereinander eintreffende Signale] den Schwellenwert des Axonhügels übertreffen müssen, damit das Neuron Informationen an andere Informationen weiterleitet. Hierzu mß die Membran des Axonhügels über den Schwellenwert depolarisiert werden [BCP18, p.111] damit über eine chemische Reaktion in den präsynaptischen Endigungen des Neurons (den Axonterminalen) Informationen an postsynaptische Synapsen (Dendriten anderer Neuronen) weitergeleitet werden können. Gleiche Quelle verweist in diesem Zusammenhang auf den Axonhügel als "Initiationszone". Hierzu müssen wir noch Bedeutung und Funktion der Potentiale eines Neurons sowie Funktionsweise der Synapsen betrachten, bevor wir imf olgenden Abschnitt die gesammelten Informationen zusammen mit McCulloch und Pitts in ein Modell gießen können.


### Membranpotential
Das MEmpranpotential (im folgenden $E_m$) oder auch Ruhepotential ist das Potential einer erregbaren Zelle in Ruhe, also Zellen, die momentan weder inhibitorisch oder exzitatorisch beeinflußt werden und deshalb keine Impulse erzeugen [BCP18, p.61]. Es liegt laut [SD07, p.44] je nach Zelltyp zwischen −100 und −50 mV: Bei den hier betrachteten Neuronen dürfen wir von einem Ruhepotential von -65 mV ausgehen. [BCP18, p.70], [SD07 sagt -70- -90, p. 47] Das membranpotential entsteht  durch eine ungleiche Ionenverteilung VErteilung zwischen der intrazellulären und der extrazellulären Flüssigkeit [SD07, p.44], wobei die das Zytosol **Entlang der MEmbranoberfläche** im im intrazelllulären Raum im Verhältnis zum EZR eine negative Ladung aufweist. [BCP18, p.61]: Die durch die Membran von dem EZR und dem IZR weisen die gleiche Anzahl gelöster Stoffe auf (isotoniosch), allerdings haben wir eine ungleichmäßige Verteilung von K+ und Na+ Ionen: Im EZR haben wir mehr NA Ionen als KA Ionen sowie mehr CA+ Ionen (NA: 150 mmol/kg H_2O, 15mmol IZR; 5 zu 100; Ca+ 2 zu 0,0002 [BCP18, p.75, Abb.3.15]). 

Die Membran ist durchzogen von Ionenkanaäle, die selektiv permeable für Ionen sind (Ionenselektivität [BCP18, p 66.]): So sind Kaliumkanäle durchlässig für Ka+ Ionen, Natriumkanaäle durchlässig für NA Ionen. Die Kanäle sind in einem geöffneten oder geschlossen Zustand, was durch Änderungen in der lokalen Mikroumgebung der Membran gesteuert werden kann. [BCP18, p 66.] Ein Konzentrationsgradient zur Aufrechterhaltung eines Konzentrationsgradientent, der für die Anzahl der Na+ und Ka+ Ionen IZ und EZ zuständig ist [SD07, p.44], übernehmen Natrium-Kalium-Pumpen (ATPasen [SD07 p. 26])

Der Wert des Ruhepotentials ergibt sich nun


Das Ruhepotential wird später bei der Betrachtung des Aktionspotentials eine bedeutende Rolle spielen: Die Depolarisation des Ruhepotentials ist für ein Neuron der Anstoß, um Signale zu weiterzuleiten. Erwähnenswert ist im übrigen, dass zwar alle lebenden Zellen ein Membranpotential aufweisen, aber nur erregbare Zellen (wie nerven oder Muskelzellen dazu in der Lage sind, die "IOonenleitfähigkeit ihrer Membran auf einen Reiz hin stark zu verändern" [SD07, p. 44]. 

### Schwellenpotential und Aktionspotential

> Der Aufstrich des Aktionspotenzials lässt sich durch einen Natriumeinstrom erklären, die
fallende Phase durch einen Kaliumausstrom. Das Aktionspotenzial ist also einfach auf die
Bewegung von Ionen durch Kanäle zurückzuführen, die durch Veränderungen des Membranpotenzials gesteuert werden. [BCP18, p.96]

> Schwellenwert. Der Schwellenwert ist das Membranpotenzial, bei dem sich genügend
spannungsabhängige Natriumkanäle öffnen, sodass die relative Ionenpermeabilität der
Membran für Natrium- größer als für Kaliumionen ist [BCP18, p.103] 

> Aufstrich. [Depolarisationsphase SD07, p.46] Wenn die Innenseite der Membran ein negatives elektrisches Potenzial aufweist, gibt es eine starke elektrochemische Triebkraft für NaC-Ionen. Deshalb strömen
NaC-Ionen durch die geöffneten Natriumkanäle schnell in die Zelle und verursachen
dort eine rasche Depolarisation.  [BCP18, p.103]

> Außerdem sorgt die Na+
-K+
-ATPase
( S. 26) dauernd für die Wiederherstellung
der ursprünglichen Ionenkonzentrationen
( S. 46) [SD07, p.46]

 
der selektive Na+ Ionenkanal öffnet sich bei Veränderung des elektrischen Membranpotentials. [BA18, p97, weitergehende Erklärungen zu der Funktionsweise des Spannunsgssensors dieses Kanals auch auf dieser Seite]

Die Membran wird depolarisiert, so dass die Ionenkanaäle öffnen und Na+ in die Zelle eindringt. Dringen genug Zellen in das ZI, wird das Neuron depolarisiert 

Das Membrampotential kann über komplexe Vorgänge durch den Austausch von Ka+ und Na+ Ionen verstehen. Man klann sich das so vorstellen, dass eine Mebran in Ruheszustand für NatriumIonen imperable ist für EZF Na+ Ionen weniger durchlässig ist, und das Ruhepotenzial durch die ungleiche Verteilung von Na+ und Ka+ Ionen (UZF und EZF) bedingt ist. Durch entsprechende positive  Reize wird die Membran pereabel durchlässig für die NatriumIonen, die nun in das Zellinnere strömen könen und eine Verschiebung des Mebranpotenzials erwirken. Es findet eine Depolarisation statt,. Öffnen sich genug Natriumkanaäle, und wird der Schwellenwert des Axonhügels überschritten, findet ein Aktionspotential statt. das sich entlang des Axons fortpflanzt und letztendlich am Axonterminal für die Exozytose von Neurotransmittern sorgt.

### Alles oder Nichts Prinzip






Die Änderung des Membranpotentials geschieht, wenn die Membran ihre Durchlässigkeit verändert und von dem impereablen Zustand (Ruhezustand) exzitatorisch erregt wird: Kommen bei dem Neuron entsprechende positive Ladungen an, Signale an, Dies geschieht mit hilfe der Natrium Kaium Pumpe, die einen Na+/Ka+ Austausch zwischen IZF und EZF möglich macht, und somit das Membranpotenzial der Zelle verringert bzw. erhöht. Wir erinnern uns, dass das Innere des Soma aus Cytosol besteht, einer Kaliumreichen flüssigkeit. Der Kaliumgehalt EZF ist dagegen niedriger als der dort befindliche als der  Natriumgehalt. Allerdings kann durch komplexe chemische Vorgänge ein Austaiusch der Na+Ka+ Konztentration statfinden, indem sich die Durchklässigkeit der Membran für verschiedene IOnen ändertein Austritt der KA+ und der Na+ Ionen stattfinden, so dass sie das Mebrampotential ändert: Strömen mehr NA+ Ionen in das zellinnere, änderts ich das Membranpotential hin zum positiven. 


## Synapsen



### Präsynaptische Endigung

### Synaptenspalt

### Postsynaptische Endigung


## Kommunikation


### Neurotransmitter

#### Erregende TRansmitter 

#### Hemmende TRansmitter

> Neuronen als hilfreich erwiesen. Inhibitorische Synapsen sind nicht nur über die Dendriten verteilt, sondern kommen bei vielen Neuronen auch gehäuft auf dem Soma und dem
Axonhügel vor. Dort sind sie in einer besonders wirksamen Position, um die Aktivität des
postsynaptischen Neurons zu beeinflussen [BCP18, p.148]

### Transmitterfreisetzeung





- Neuron besteht aus dem Zellkörper, Dendriten und dem Axon (Soma bezeichnet alles außer dem Axon s. [HEB49]: Zerllkörper wird auch Perikaryon genannt [ROH17, p58]
-
- Dendriten führt zum Neuron hin, Axon (auch Neurit geannt [SD07, p.43]) führt zum Neuron Weg: Dendrit eingehende Verbindung, Axon ist ausgehende Verbindinung
-
- Übertragung zwischen Neuronen geschieht über Synapsen, über die die Nervenzellen miteinander verbunden sind: zwischen präsynaptischen Endigungen (Acxon)) und den postsynapitschen Zelle (Dendrit) ein Spalte existiert, über den durch Bitenstoffe (Neurotransmitter) die Signale weitergeleitet werden, sofern ein Aktionspotential das Schwellenpotenzial des Axonhügels übertroffen hat.
-
- Hierbei wird zwischen exzitatorischen postsynaptischen Potential (EPSP )und inhibotoirischem postsynaptischen Potential (IPSP) unterschieden: EPSP hat erregende Wirkung, IPSP hemmende (als erregende Transmitter sind bspw. Glutamat bekannt, auch bekant als Geschmacksversärker; Hemmende TRansmitter sind bspw. GABA - Gamma-Aminobuttersäure (GABA), so erhöht bspw. das Medikament Gabapentin den GABA Spiegel[1] und wird zur Behandlung von Anfallsleiden wie der Epilepsie sowie bei Nervenschmerzen (Neuropathien) angewendet[2]
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

# Potentiale

## Schwellenpotential: 
Als Schwellenpotential bezeichnet man im Zusammenhang mit der Signalübermittlung in Nerven und Muskelfasern jene Potentialdifferenz, bei der ein Aktionspotential ausgelöst wird. (https://de.wikipedia.org/wiki/Schwellenpotential, 15.07.2023)

## Ruhemembranpotential:   
Als Ruhemembranpotential oder auch knapp Ruhepotential (abgekürzt RMP bzw. RP) wird das Membranpotential von erregbaren Zellen in Ruhe bezeichnet, also bei nicht erregten Nervenzellen oder Muskelzellen. Eine charakteristische, vorübergehende Abweichung vom Ruhepotential ist beispielsweise das Aktionspotential (AP) dieser Zellen bei Erregung. Die als Ruhemembranpotential bezeichnete Potentialdifferenz zwischen negativ geladenem Zellinneren und extrazellulärer Umgebung über die Membran beträgt je nach Zelltyp zwischen −100 und −50 mV [SD07, p.44], bei den meisten Nervenzellen rund −70 mV. https://de.wikipedia.org/wiki/Ruhemembranpotential 15.07.2023
> Die Ursache des Ruhepotenzials ist eine ungleiche Ionenverteilung (B) zwischen der intrazellulären Flüssigkeit (IZF) und der extrazellulären Flüssigkeit (EZF) [SD07, p. 44]
> > Alle lebenden Zellen weisen ein (Ruhe-) Membranpotenzial auf, aber nur die erregbaren Zellen (Nerv, Muskel) haben die Fähigkeit, die Ionenleitfähigkeit ihrer Membran auf einen Reiz hin stark zu verändern: Aktionspotenzial (S. 46) [SD07, p. 44]

## Das Aktionspotenzial
> Das Aktionspotenzial ist das im Axon weitergeleitete Signal und löst am Muskel die Kontraktion aus.  [SD07, p.46]

>  Ursache der Erregung kann z. B. die Öffnung postsynaptischer Kationenkanäle durch Neurotransmitter (S. 50 ff.) oder eine aus der Umgebung weitergeleitete (elektrotonische) Erregung sein (S. 48).
> Nähert sich das Em während der Erregung einem kritischen Wert, dem Schwellenpotenzial (A1), so werden (sog.
schnelle) potenzialgesteuerte Na+ -Kanäle aktiviert (B4 und B1⇒B2), d. h. die Na+-Leitfähigkeit gNa (S. 32) steigt an (A2) und Na+ strömt ein. Wird das Schwellenpotenzial nicht  erreicht, so bleibt es bei dieser „lokalen Antwort“  [SD07, p.46]

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
> Hemmende Transmitter sind z. B. Glycin und GABA sowie Acetylcholin (M2- und M3- Rezeptor an M-cholinergen Synapsen;  S. 82). Sie erhöhen an der subsynaptische Membran nur die Leitfähigkeit (g) für K+ (z. B. der metabotrope GABAB-Rezeptor) oder für Cl–
(z. B. die ionotropen Glycin- und GABAA-Rezeptoren;  F). Die Membran wird dadurch meist etwas hyperpolarisiert, bei erhöhter gK
deswegen, weil sich das Em dem EK nähert ( S. 44). Dieses inhibitorische postsynaptische Potenzial (IPSP) (max. ca. 4 mV;  D) wirkt aber weniger durch seine – der Depolarisation des EPSP entgegenlaufende – Hyperpolarisation (das IPSP kann sogar selbst leicht depolarisierend sein), sondern dadurch, dass die während des IPSPs erhöhte Membranleitfähigkeit die elektrotonischen Ströme der EPSPs kurzschließt (gK oder gCl hoch!). Da sowohl EK als auch ECl nahe dem Ruhepotenzial liegen
( S. 44), wird dieses stabilisiert, d. h. die EPSPs werden durch hohe K+ - und Cl–-Kurzschluss-Ströme unwirksam gemacht. Die Depolarisation der EPSPs ist daher kleiner und   die Erregung des postsynaptischen Neurons somit gehemmt [SD07, p.52]

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
Verringerung des Membrampotentials einer Zellmembran; Die Membranspannung kann durch Ausschüttung eines Transmitters depolarisiert werden; bei dem erregenden Potential steigt die Spannung in der postsynaptischen Zelle -> Spannung wird positiver, weil die begative Spannung also abnimmt, spricht man von Depolarisierung
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
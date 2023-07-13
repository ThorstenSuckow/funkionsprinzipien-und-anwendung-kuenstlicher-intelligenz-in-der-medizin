Die Autoren beginnen das Paper mit der Aussage, daß, basierend auf dem "Alles-oder-nichts Gesetz" - Ereignisse von Nervenzellen und ihrer Beziehungen untereinander wie Aussagenlogik verstanden werden können.

I Introduction
In der Einführung gehen die Autoren auf das Zusammenspiel von Nervenzellen, Schwellenwerte und der Weiterleitung von Signalen ein. HIerbei machen sie noch einmal deutlich, welche Bedeutung der Schwellenwert hat, der durch die Nervenzelle selber festgelegt ist. Weiter schreiben Sie über die Hemmung anderer Nervenzelle, sobald eine Nervenzelle Signale weiterleitet: "Inhibition is the termination opf prevention of the activity of one group of neurons by concurrent or antecedent activity of a second group", was sich später auch bei [ROS57] wiederfindet, der die Rückkoppelung von R-Einheiten zu A-Einheiten beschreibt-

> The "all-or-none law" of nervous activity is sufficient to insure that the activity of any neuron may be represented as a proposition [CUL43, p100]
(bspw. Feuert Ja = 1, Nein = 0)

Weiter führen sie aus, daß die Verbindungen der NErvenzellen untereinander über Verbindungen der Aussagen modelliert werden können, wobei sie sagen, daß zu jeder Raktion eines Neurons eine  korrespondierende Behauptung einer einfachen Aussage. Die Konfiguration von den Synapsen (die leitfähigkeit, Anm Autor) und der Schwellwert  des Neuron sind hier in BEtracht zu ziehen.

Relative Inhibition: Eine hemmende Synapse verhindert nicht das Feuern eines Neurons, sondern erhöht nur den Schwellenwert, so daß mehr Neuronen feuern müssen, um über die Schwelle zu kommen

Im folgenden werden 10 Theoreme aufgestellt, für Netze mit und ohne Zyklen. 

2. The Theory: Nets Without Circles 
Im zweiten Kapitel stellen die Autoren für ihren Kalkül folgende pshysikalischen Annahmen:
1) Ein Neuron arbeitet auf Basis des Alles oder NIchts Gesetz
2) Eine bestimmte Nummer von Synapsen muß angeregt werden innerhalb einer bestimmten Periode  um ein Neuron erregen zu können
3) Die einzige signifikante VErzögerung bei der Signalübertragung innerhalb des Nervensystems ist bedingt durch Verzögerung der Synapse (Leitfähigkeit, Anm. des Autors)
4) Eine hemmende Synapse verhindert die Erregung eines Neurons
5) Die Struktur des Netwerks ändert sich nicht

3. Nets with Circles
In zyklischen Netzen nimmt die Komplexität zu, weil "This is alrgely a consequence of the possibility that activity may be set up in a circuit and continue reverberating around it for an indefinite period of time, so that the realizable **Pr** may involve reference to past events of an indefinite degree of remoteness" [CUL42, p108]

Am Ende dieses Kapitels knüpfen die Autoren ihre Aussage an Berechenbarkeit an: "if any number can be comouted by an organism, it is computable by these definitions, and conversely", wo zu [PIC04] feststellt: 

> By stating that McCulloch–Pitts nets computed, this passage provided the first
known published link between the mathematical theory of computation and brain theory. It was a pivotal statement in the history of
computationalism. [PIC04, p. 197]

Anmerkungen:

- Offensichtlich ist das Modell nicht lernfähig
- Mit den Inhibitoren, And und Or haben wir ein vollständiges Operatorensystem, das heißt, jede boolesche Funktion läßz sich durch einen aussagenlogischen Ausdruck beweisen, in dem nur Operatoren aus dieser Menge vorkommen [HOF22, p.93] und [FAU94, p.28]
- Abbildungen AND, OR, XOR, NOT hinzufügen
Alles oder Nichts gesetz :
Ein  Funktionsprinzip von Nervenzellen, das besagt, daß nach übertreten eines bestimmten Schwellenwertes innerhalb des Axons Aktionspotentiale generiert werden, die Nervenzelle diese Potentialle weiterleitet. Alle unterhalb dieser Schwelle liegenden Potentiale werden nciht weitergeleitet. Sie auch ReLu
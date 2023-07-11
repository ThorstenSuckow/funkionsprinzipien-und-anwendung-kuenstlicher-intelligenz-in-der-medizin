Die Arbeit erscheint im Januar 1957 und wird unterstützt durch ein internes Forschungsprojekt  des Cornell
Aeronautical Labors.
Die Ursprünge des Papers liegen in den eigenständigen Forschungarbeiten des Autors auf dem Gebiet der Psychologie,
wo er u.a. untersucht,  ob ein Analogon zu dem menschlichen Gehirn zu finden ist.

1. Einführung
Seiner Aussage nach liegt ein starkes Interesse darin, mit dem Einzug der elektronischen Computer ein System zu erschaffen, 
die dem Menschen wesenseigene Züge und Funktionen nachbildet, wie Wahrnehmung, Erkennung, Generalisierung durch Erfahrung.

Diese Maschine sollte auch in der Lage sein, auf äußere Einflüsse reagieren zu können (Geräusche, Licht, Temperatur), oder Gegenstände 
auch aus anderen Entfernungen und Winkeln wiederzuerkennen. Eine besodnere BEtonung lergt er hierbei drauf, daß die Maschine ökonimisch arbeiten soll: "the number of functional 
units in the storage system, or memory, should be less than the number of forms or memories to be retained" [ROS57, p1].
Gleichzeitig ist ers ich aber auch dessen bewußt, daß zum gegenwärtigen Stand der Technik die Anforderungen eher inkomüatibel mit den konventionellen Computer Systemen sind.

Trotz allem, seinen theortischen Studien nach sollte die Konstruktion eines solchen elektromechanischem Systems möglich sein, daß in ähnlicher Weise Licht, Geräusche, elektrische Informationen verarbeitet wie ein menschliches Gehirn. Sein vorgeschlagenes System hängt dabei mehr von Probabilistik als von Dterminismus ab, und gewinnt die Zuverlässigkeit durch den Abgleich statistischer Messungen vieler Eigenschaften von vielen Objekten: Solch ein System nenn er Perceptron, und im follgenden richtet er seinen Fokus auf die Entwicklung des Phptceptrons, das visuelle Informationen verarbeiten soll. Hierbei unterscheidet er noch zwischen "temproal pattern Perceptrons" nd "momentary stimulus Perceptrons", wobei letztgenannte die Eigenschaft besitzen, Informationen auf Grundlage von einzelnen, unzusammenhängenden Bildern zuzuordnen: "isolated frames cut froma strip of movie film" [ROS57, p2]: Auf dieser Grundlage soll sein Phptpperceptron arbeiten.

2. General Description of a Photoperceptron
Er schlägt vor, sich das Perceptron zunächst wie eine Black Box vorzustellen, mit einer TV Kamera für den Input, und einem Ausgabegerät in Form eines "alphabetic printer or set of signa llights" [ROS57, p3]. Dasselbe Ausgabesigna soll dann für die Inputsignale erzeugt werden für die optischen Signale, die dem Eingabegerät zugeführt werden, bzw. daß die TV Kamera wahrnimmt, was bspw. Muster in Form von Dreiecken sein können, oder ein 3Dimensionaler Gegenstand gedreht ume ine beliebige Rotationsachse.

Weiter führt er aus, daß es mögich ist, dem System beizubringen, zwei generelle Formen, die er "percepts" nennt [ROS57, p4.] voneinander unterscheiden zu können, in dem bspw. der Maschine die Konzepte eines Kreises und eines Quadrats beibringn: Licht 1 repräsentiert Quadrat, Licht zwei repräsentiert Kreis. Dann soll dem System jeweils ein Repräsentant einer solchen klasse gezeitgt werden, während das jeweilige Licht der Maschine manuell betätigt wird. Von dem System sollte man danne rwarten können, daß, sobald nach diesem Lernprozess der Kamera ein Objekt in ähnlicher Ausprägung (verschiedener Winkel, verschieden Entfernung)  gezeigt wird, das System jeweils die richtige Lichtsignal ansteuert. Allerdings, so räumt er ein, bringt der Preis von statistischen Prinzipien mit sich, daß es u.U. zu falschen Antworten kommen kann, aber wahrscheinlich sei es mglich, diese Fehler soweit zu reduzieren, bis sie in einer Größenordnung von elektronischen Fehlern, der Mechanik und KOnstruktion des Systems inharent, vorkommen.

Die drei haupbestandteile des Systems sind:

1) Das S-System (Sensory System)
Eine Menge von Punkten in einem TV-Raster, oder Phptzelen. Jeder Rastereintrag ist verbunden mit einer Einheit des A-Systems (Association System), zu denen dann jeweils ein Signal geleitet wird von dem aktiven S-Punkt (beleuchtet durch visuelle Reize). S-A Signale können positiv oder negativ sein: Negativ hemmen die Aktivität der A-Einheiten, Positive wirken sich "excitatory", also anregend, auf die A-Einheiten aus. Hierbei kann eine S- Einheiten mit mehreren A-Einheiten verschränkt sein und negative Signale an die einen A-Einheiten und positive Signale an andere A-Einheiten weiterleiten.

2) Das A-System (Association System) 
Ist verantwortlich für das Umschalten der Funktionen zwischen Eingabe (S) und Ausgabe (R-Units, Response Units). Eine A-Einheit erhätl Eingaben von einer Anzahl von S-Units, und leitet dann Signale weiter an eine oder mehrere Repsonse units. Hierbei sind die A-Einheiten charakteriziert durch den festen Parameter $\varTheta$ ("Theta"), der den Schwellwert repräsentiert, der erreicht werden muß, um die Signale an R weiterzuleiten: Der Wert wird berechnet aus der Summe der Eingabesignale sowie der stochastischen variable $v$, dem Ausgabewert, wie bspw. Amplitude oder Frequenz: Der Wert einer A-Einheit wirkt hierbei wie ein Zähler, doer ein Register für die Speicherfunktion des Systems.

3) Das R-System (Response System)
Besteht i.d.R aus einer kleineren Anzahl von Einheiten, und steuert die Ausgabe (also bspw. Signallichter oder Schreibköpfe eines Druckers/ einer Schreibmaschine): Die EInzeiten werden aktiviert wenn ein Werz der Sinale von dem A-System eine Schwelle $\varTheta_r$ überschreitet. Außerdem ist jede R-Einheit auch noch rückgekoppelt mit der A-Einheit und sendet Signale an diese A-Einheit zurück, die die Aktivität hemmt oder unterbricht von allen mutually exklusiv R-Units und den A-Units, die diese aktivieren können: Heißt: Wenn eine R-Einheit aktiv ist, und es gibt andere R-Einheiten, die nicht gleichzeitig mit diesen aktiviert sein dürfen, dann werden die Aktivitäten zu diesen anderen R-Units unterbrichen, damit immer nur eine bestimmte R-Einheit aktiv sein darf. Sollten zwei Signale an zwei jeweils untershciedlichen R-Einheiten ankommen, dann wird die R-Einheit zuerst aktiviert, an der der höhere Wert von beiden anliegt - diese Einheit sorgt dann auch dafür, daß die Aktivitäten von anderen R-Einheiten, die nicht gleichzeiutg mit dieser R-Einheit aktiv sein fürfen, unterbunden werden.

3. Principles of Stimulus Disscrimination

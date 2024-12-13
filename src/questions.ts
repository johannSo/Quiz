interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswers: number[];
}

export const questions: Question[] = [
    {
        id: 0,
        question: "Wer erfand die Enigma?",
        options: ["Arthur Scherbius", "Alan Turing", "Issac Newton", "Ich"],
        correctAnswers: [0]
    },
    {
        id: 1,
        question: "Welche Länder nutzten die Enigma im Zweiten Weltkrieg?",
        options: ["Italien", "Deutschland", "Japan", "Frankreich"],
        correctAnswers: [1]
    },
    {
        id: 2,
        question: "Welcher Mathematiker spielte eine Schlüsselrolle beim Knacken der Enigma-Codes?",
        options: ["Albert Einstein", "Alan Turing", "Carl Friedrich Gauss"],
        correctAnswers: [1]
    },
    {
        id: 3,
        question: "In welchem Jahr wurde die Enigma-Maschine erstmals erwähnt?",
        options: ["1888", "1939", "1918"],
        correctAnswers: [2]
    },
    {
        id: 4,
        question: "Was war das Hauptziel der Enigma-Maschine?",
        options: ["Berechnung von mathematischen Gleichungen", "Verschlüsselung von Nachrichten", "Navigation auf See", "Wettervorhersage"],
        correctAnswers: [1]
    },
    {
        id: 5,
        question: "Welche Organisation war in Bletchley Park für das Knacken der Enigma verantwortlich?",
        options: ["MI5", "CIA", "Nazi-Deutscher Geheimdienst", "Government Code and Cypher School"],
        correctAnswers: [3]
    },
    {
        id: 6,
        question: "Wie viele Rotoren hatte die deutsche Wehrmachts-Enigma standardmäßig?",
        options: ["3", "4", "5", "6"],
        correctAnswers: [0]
    },
    {
        id: 7,
        question: "Welche Rolle spielte das Steckerbrett in der Enigma-Maschine?",
        options: ["Gabs nicht", "Komplexitätssteigerung", "War ein Ersatzteil"],
        correctAnswers: [1]
    },
    {
        id: 8,
        question: "Welche Enigma-Variante wurde von der deutschen Marine verwendet?",
        options: ["Wehrmacht-Enigma", "Kriegsmarine-Enigma", "Luftwaffe-Enigma"],
        correctAnswers: [1]
    },
    {
        id: 9,
        question: "Wie viele mögliche Einstellungen konnte die Enigma-Maschine haben?",
        options: ["1 Million", "100 Trilion", "158.962.555.217.826.360.000.000"],
        correctAnswers: [2]
    },
    {
        id: 10,
        question: "Welches Gerät half den Alliierten, die Enigma-Codes zu entschlüsseln?",
        options: ["Enigma-Maschine", "Colossus", "Turing Bombe"],
        correctAnswers: [2]
    },
    {
        id: 11,
        question: "Welche Schwäche der Enigma nutzten die Kryptologen aus?",
        options: ["Wiederholte Nachrichtenmuster", "Steckerbrett", "Steckerverbindungen"],
        correctAnswers: [0]
    },
    {
        id: 12,
        question: "In welchem Land wurde die erste erfolgreiche Entschlüsselung der Enigma durchgeführt?",
        options: ["Polen", "USA", "England", "Frankreich", "Deutschland"],
        correctAnswers: [0, 4]
    },
    {
        id: 13,
        question: "Was war die Hauptfunktion der Rotoren in der Enigma-Maschine?",
        options: ["Verschlüsselung", "Entschlüsselung", "Komplexitätssteigerung"],
        correctAnswers: [0]
    },
    {
        id: 14,
        question: "Welche Art von Maschine war die Enigma hauptsächlich?",
        options: ["mechanisch", "elektronisch", "mechanisch-elektronische "],
        correctAnswers: [2]
    },
    {
        id: 15,
        question: "Warum war die Entschlüsselung der Enigma entscheidend für die Alliierten im Zweiten Weltkrieg?",
        options: ["Weil die Enigma die Schlüssel für die deutschen Geheimdienste war", "Weil die Enigma die Bomben abwurf"],
        correctAnswers: [0]
    },
    {
        id: 16,
        question: "Welche Komponente der Enigma-Maschine war entscheidend für die tägliche Neukonfiguration?",
        options: ["Steckerbrett", "Rotoren", "Reflektor"],
        correctAnswers: [0, 1]
    },
    {
        id: 17,
        question: "Welche Schwäche der Enigma wurde durch die Verwendung von Wetterberichten ausgenutzt?",
        options: ["Ständig widerholende Sätze", "Falsche Kabelverbindungen", "Steckerbrett"],
        correctAnswers: [0]
    },
    {
        id: 18,
        question: "Welche Art von Nachrichten wurden häufig mit der Enigma verschlüsselt?",
        options: ["Wetterberrichte", "Geheime Nazi Nachrichten", "Persönliche Briefe"],
        correctAnswers: [0, 1]
    },
    {
        id: 19,
        question: "Welche Innovation machte die Enigma besonders schwierig zu knacken?",
        options: ["die Tastatur", "der Funk", "die ständige Veränderung der Verschlüsselung"],
        correctAnswers: [2]
    },
    {
        id: 20,
        question: "Welche Herausforderung stellte die Enigma für die Alliierten dar?",
        options: ["Unbekannte Technologie", "Mangel an Ressourcen", "Hohe Anzahl möglicher Kombinationen"],
        correctAnswers: [2]
    }
]; 

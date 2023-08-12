import { useState } from "react";
import "./App.module.css";

function App() {
  const [word, setWord] = useState("");
  
  function getTopWords(text: string) {
    // Limpiar el texto y convertirlo a minúsculas
    const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, " ");

    // Obtener todas las palabras del texto en un array
    const words: Array<string> = cleanedText.split(/\s+/);

    // Contar la frecuencia de cada palabra
    const wordCount: Record<string, number> = {};
    words.forEach((word) => {
      if (word.length > 3) {
        if (wordCount[word]) {
          wordCount[word]++;
        } else {
          wordCount[word] = 1;
        }
      }
    });

    // Ordenar las palabras por su frecuencia en orden descendente
    const sortedWords = Object.keys(wordCount).sort(
      (a, b) => wordCount[b] - wordCount[a]
    );

    // Obtener las 10 palabras más repetidas, incluyendo la palabra clave del título
    const topWords = sortedWords.slice(0, 10);

    return topWords;
  }

  function countWords() {
    const topWords = getTopWords(word);
    const wordList = topWords.map((word) => <li key={word}>{word}</li>);

    return (
      <div>
        <p>Las 10 palabras clave son:</p>
        <ul>{wordList}</ul>
      </div>
    );
  }

  return (
    <>
      <h1>Optimice SEO con palabras claves</h1>
      <h2>Ingrese su texto</h2>
      <div className="parrafo">
        <textarea
          id="input-text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
          rows={25}
          cols={80}
          placeholder="texto"
        ></textarea>
        <button onClick={() => countWords()}>Palabras clave</button>
      </div>

      <div id="output">{countWords()}</div>
    </>
  );
}

export default App;

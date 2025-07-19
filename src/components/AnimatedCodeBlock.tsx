import React, { useMemo } from "react";

const tokenClassMap: Record<string, string> = {
  "code-string": "text-cyan-400 font-bold",
  "code-punctuation": "text-white",
  "code-key": "text-pink-400 font-bold",
  "code-this": "text-green-600 italic font-bold",
  "code-string-skills": "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent font-bold",
};

const AnimatedCodeBlock = () => {
  // Each line is an array of tokens: { text, className }
  const codeLines = useMemo(() => [
    [
      { text: 'const', className: 'code-key' },
      { text: ' developer ', className: 'code-this' },
      { text: '=', className: 'code-punctuation' },
      { text: ' {', className: 'code-punctuation' },
    ],
    [
      { text: '  name', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'Mohamed Atef'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  title', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'Machine Learning Engineer'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  location', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'Giza, Egypt'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  email', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mo7amed3atf24@gmail.com'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  github', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mohamedatef24'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  linkedin', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mohamed-atef-mawad'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  kaggle', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mo7amed3atf'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    // AI-related skills, 2 per line, in the requested order
    [
      { text: '  skills', className: 'code-key' },
      { text: ':', className: 'code-punctuation' },
      { text: '[', className: 'code-punctuation' },
      { text: "'ML'", className: 'code-string-skills' },
      { text: ', ', className: 'code-punctuation' },
      { text: "'DL'", className: 'code-string-skills' },
      { text: ',', className: 'code-punctuation' },
      { text: "'TensorFlow'", className: 'code-string-skills' },
      { text: ',', className: 'code-punctuation' },
      { text: '           ', className: '' },
      { text: "'PyTorch'", className: 'code-string-skills' },
      { text: ',', className: 'code-punctuation' },
      { text: "'Reinforcement Learning'", className: 'code-string-skills' },
      { text: ', ', className: 'code-punctuation' },
    ],
    [
      { text: '           ', className: '' },
      { text: "'Probability & Statistics'", className: 'code-string-skills' },
      { text: ']', className: 'code-punctuation' },
    ],
    [
      { text: '}', className: 'code-punctuation' },
    ],
  ], []);
  const [lineIdx, setLineIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (done) return;
    if (lineIdx < codeLines.length) {
      const line = codeLines[lineIdx];
      const totalChars = line.reduce((acc, t) => acc + t.text.length, 0);
      if (charIdx < totalChars) {
        const timeout = setTimeout(() => setCharIdx(charIdx + 1), 18);
        return () => clearTimeout(timeout);
      } else {
        // Move to next line after a short pause
        const timeout = setTimeout(() => {
          setLineIdx(lineIdx + 1);
          setCharIdx(0);
        }, 180);
        return () => clearTimeout(timeout);
      }
    } else {
      setDone(true);
    }
  }, [lineIdx, charIdx, done, codeLines]);

  // Render lines up to current
  const renderedLines = codeLines.slice(0, lineIdx).map((line, i) => (
    <div key={i} className="hero-code-editor-content">
      {line.map((token, j) => (
        <span
          key={j}
          className={tokenClassMap[token.className] || "text-white"}
        >
          {token.text}
        </span>
      ))}
    </div>
  ));

  // Render current line up to charIdx
  if (lineIdx < codeLines.length) {
    const line = codeLines[lineIdx];
    let charsLeft = charIdx;
    const tokens = [];
    for (let i = 0; i < line.length; i++) {
      const token = line[i];
      if (charsLeft > 0) {
        const showLen = Math.min(token.text.length, charsLeft);
        tokens.push(
          <span
            key={i}
            className={tokenClassMap[token.className] || "text-white"}
          >
            {token.text.slice(0, showLen)}
          </span>
        );
        charsLeft -= showLen;
      }
    }
    renderedLines.push(
      <div key={lineIdx} className="hero-code-editor-content">
        {tokens}
        <span className="blinking-cursor">|</span>
      </div>
    );
  }

  return <div>{renderedLines}</div>;
};

export default AnimatedCodeBlock; 
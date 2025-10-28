import { useState, useEffect } from 'react';

const AIDemo = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const fullCode = `const AI = new Intelligence();\nAI.analyze(userInput);\nAI.learn(patterns);\nAI.transform(ideas);`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setDisplayedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          currentIndex = 0;
          setDisplayedCode('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-4">
          Live AI Demo
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Experience the power of AI integration in real-time
        </p>
        <div className="glass-card p-12 min-h-[300px] flex items-center justify-center neon-glow">
          <div className="w-full">
            <pre className="text-primary font-mono text-lg leading-relaxed">
              {displayedCode}
              <span className="inline-block w-2 h-5 bg-primary ml-1 animate-[typing-cursor_1s_ease-in-out_infinite]" />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;

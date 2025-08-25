import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]()<>/\\|@#$%^&*";
    const columns = Math.floor(window.innerWidth / 20);
    const drops: number[] = [];

    // Initialize drops array
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const createColumn = (index: number) => {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${index * 20}px`;
      
      let text = '';
      const columnHeight = Math.floor(Math.random() * 15) + 10;
      
      for (let i = 0; i < columnHeight; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length)) + '\n';
      }
      
      column.textContent = text;
      
      const animationDuration = Math.random() * 5 + 5; // 5-10 seconds
      column.style.animationDuration = `${animationDuration}s`;
      column.style.animationDelay = `${Math.random() * 2}s`;
      
      return column;
    };

    const initMatrix = () => {
      // Clear existing columns
      container.innerHTML = '';
      
      // Create new columns
      for (let i = 0; i < columns; i++) {
        const column = createColumn(i);
        container.appendChild(column);
      }
    };

    const handleResize = () => {
      initMatrix();
    };

    initMatrix();
    
    // Recreate columns periodically for variety
    const interval = setInterval(() => {
      const randomColumn = Math.floor(Math.random() * columns);
      const existingColumn = container.children[randomColumn];
      if (existingColumn) {
        const newColumn = createColumn(randomColumn);
        container.replaceChild(newColumn, existingColumn);
      }
    }, 2000);

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixBackground;
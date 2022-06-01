import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    console.log('cursor');
    if (cursorRef.current == null || cursorRef == null) return;
    console.log('cursor ref is there');
    document.addEventListener('mousemove', (e) => {
      console.log('setting mouseover listener');
      if (cursorRef.current == null) return;
      e.stopPropagation();
      // @ts-ignore
      cursorRef.current.setAttribute(
        'style',
        'top: ' + e.clientY + 'px; left: ' + e.clientX + 'px;',
      );
    });

    document.addEventListener('mousedown', () => {
      if (cursorRef.current == null) return;
      // @ts-ignore
      cursorRef.current.classList.add('full');
    });

    document.addEventListener('mouseup', () => {
      if (cursorRef.current == null) return;

      setTimeout(() => {
        // @ts-ignore
        cursorRef.current.classList.remove('full');
      }, 110);
    });
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;

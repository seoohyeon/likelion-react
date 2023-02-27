import { useState, useEffect } from 'react';

export function useMouse() {
  const [x, updateX] = useState(0);
  const [y, updateY] = useState(0);
  // const [mousePosition, updateMousePosition] = useState({x:1, y:1});

  return { x, y };
}

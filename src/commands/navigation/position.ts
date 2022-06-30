import { getMousePos } from 'robotjs';

export const position = () => {
  const { x, y } = getMousePos();

  return `${x},${y}`;
}

import { moveMouse, getMousePos } from 'robotjs';

export const right = (offsetX: string) => {
  const { x, y } = getMousePos();

  moveMouse(x + Number(offsetX), y);
};

import { moveMouse, getMousePos } from 'robotjs';

export const left = (offsetX: string) => {
  const { x, y } = getMousePos();

  moveMouse(x - Number(offsetX), y);
};

import { moveMouse, getMousePos } from 'robotjs';

export const up = (offsetY: string) => {
  const { x, y } = getMousePos();

  moveMouse(x, y - Number(offsetY));
};

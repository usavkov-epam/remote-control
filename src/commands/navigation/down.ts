import { moveMouse, getMousePos } from 'robotjs';

export const down = (offsetY: string) => {
  const { x, y } = getMousePos();

  moveMouse(x, y + Number(offsetY));
};

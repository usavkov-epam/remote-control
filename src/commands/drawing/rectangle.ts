import { getMousePos, mouseToggle, moveMouseSmooth } from 'robotjs';

export const rectangle = (width: string, height: string) => {
  const { x, y } = getMousePos();

  mouseToggle('down');
  moveMouseSmooth(x + Number(width), y)
  moveMouseSmooth(x + Number(width), y + Number(height))
  moveMouseSmooth(x, y + Number(height))
  moveMouseSmooth(x, y)
  mouseToggle('up');
}

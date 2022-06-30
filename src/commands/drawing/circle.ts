import { getMousePos, mouseToggle, moveMouse } from 'robotjs';

export const circle = (radius: string) => {
  const { x, y } = getMousePos();

  mouseToggle('down');
  
  const delta = 2 * Math.PI / 180;

  for (let angle = 0; angle < Math.PI * 2; angle += delta) {
    process.nextTick(() => {
      const newX = (x - Number(radius)) + Number(radius) * Math.cos(angle);
      const newY = y + Number(radius) * Math.sin(angle);
      
      moveMouse(newX, newY);
    })
  }

  mouseToggle('up');
}

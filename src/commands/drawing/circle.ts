import { getMousePos, mouseToggle, moveMouse } from 'robotjs';

export const circle = (diameter: string) => {
  const { x, y } = getMousePos();

  mouseToggle('down');
  
  const radius = Number(diameter) / 2;
  const delta = 2 * Math.PI / 180;

  for (let angle = 0; angle < Math.PI * 2; angle += delta) {
    process.nextTick(() => {
      const newX = (x - radius) + radius * Math.cos(angle);
      const newY = y + radius * Math.sin(angle);
      
      moveMouse(newX, newY);
    })
  }

  mouseToggle('up');
}

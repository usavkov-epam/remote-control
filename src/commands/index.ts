import { circle, rectangle, square } from './drawing';
import { down, left, position, right, up } from './navigation';
import { screenshot } from './print';

interface Commands {
  [commandName: string]: (...args: string[]) => string | void;
}

const commands: Commands = {
  mouse_up: up,
  mouse_down: down,
  mouse_left: left,
  mouse_right: right,
  mouse_position: position,

  draw_circle: circle,
  draw_rectangle: rectangle,
  draw_square: square,

  prnt_scrn: screenshot,
};

export const handleCommand = (command: string, args: string[]) => {
  const handler = commands[command];

  if (handler !== undefined) {
    return handler(...args);
  }
};

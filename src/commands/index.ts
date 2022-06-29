import { down, left, position, right, up } from './navigation';

interface Commands {
  [commandName: string]: (...args: string[]) => void;
}

const commands: Commands = {
  mouse_up: up,
  mouse_down: down,
  mouse_left: left,
  mouse_right: right,
  mouse_position: position,
};

export const handleCommand = (command: string, args: string[]) => {
  const handler = commands[command];

  if (handler !== undefined) {
    handler(...args)
  } 
};

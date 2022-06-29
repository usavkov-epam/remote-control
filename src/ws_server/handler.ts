import { handleCommand } from "../commands";

export const handleData = (data: string) => {
  const [command, ...args] = data.split(' ');

  return handleCommand(command, args);
}

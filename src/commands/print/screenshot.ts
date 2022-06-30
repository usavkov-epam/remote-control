import Jimp from 'jimp';
import { getMousePos, screen } from 'robotjs';

export const screenshot = async (size: string = '200') => {
  const { x, y } = getMousePos();

  const img = new Jimp({
    data: screen.capture(x, y, +size, +size).image,
    height: +size,
    width: +size,
  });

  const base = await img.getBase64Async(Jimp.MIME_PNG);

  return base.split(',')[1];  
}

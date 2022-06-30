import { Bitmap } from "robotjs";

export const bgraToRgba = (bitmap: Bitmap) => {
  const _bitmap = { ...bitmap };

  for (let i = 0; i < _bitmap.width * _bitmap.height * 4; i += 4) {
    [_bitmap.image[i], _bitmap.image[i + 2]] = [_bitmap.image[i + 2], _bitmap.image[i]];
  }

  return _bitmap;
};

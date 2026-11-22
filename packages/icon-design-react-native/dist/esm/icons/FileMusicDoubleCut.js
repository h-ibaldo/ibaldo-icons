import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileMusicDoubleCut = forwardRef(function FileMusicDoubleCut(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M21 13L14 14L14 21","key":"0"}),
    createElement(Path, {"d":"M14 21C14 21.551 13.328 22 12.5 22C11.672 22 11 21.551 11 21C11 20.449 11.672 20 12.5 20C13.328 20 14 20.449 14 21Z","key":"1"}),
    createElement(Path, {"d":"M21 13L21 20","key":"2"}),
    createElement(Path, {"d":"M21 20C21 20.551 20.328 21 19.5 21C18.672 21 18 20.551 18 20C18 19.449 18.672 19 19.5 19C20.328 19 21 19.449 21 20Z","key":"3"}),
    createElement(Path, {"d":"M20 10L20 7.828C20 7.297 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.703 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L8 22","key":"4"})
  );
});

FileMusicDoubleCut.displayName = 'FileMusicDoubleCut';

export default FileMusicDoubleCut;
export { FileMusicDoubleCut };

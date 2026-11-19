import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BookTextRound = forwardRef(function BookTextRound(
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
    createElement(Path, {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22Z","key":"0"}),
    createElement(Path, {"d":"M4 20C4 18.895 4.895 18 6 18L18 18C19.105 18 20 17.105 20 16","key":"1"}),
    createElement(Path, {"d":"M8 7L16 7","key":"2"}),
    createElement(Path, {"d":"M8 11L16 11","key":"3"})
  );
});

BookTextRound.displayName = 'BookTextRound';

export default BookTextRound;
export { BookTextRound };

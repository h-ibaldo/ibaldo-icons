import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BookStackOverlap = forwardRef(function BookStackOverlap(
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
    createElement(Path, {"d":"M22 10L12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14L22 14","key":"0"}),
    createElement(Path, {"d":"M22 10L22 2L12 2C10.895 2 10 2.895 10 4","key":"1"}),
    createElement(Path, {"d":"M10 4L10 12","key":"2"}),
    createElement(Path, {"d":"M14 18L4 18C2.895 18 2 18.895 2 20C2 21.105 2.895 22 4 22L14 22","key":"3"}),
    createElement(Path, {"d":"M14 18L14 17.07","key":"4"}),
    createElement(Path, {"d":"M7 10L4 10C2.895 10 2 10.895 2 12","key":"5"}),
    createElement(Path, {"d":"M2 12L2 20","key":"6"})
  );
});

BookStackOverlap.displayName = 'BookStackOverlap';

export default BookStackOverlap;
export { BookStackOverlap };

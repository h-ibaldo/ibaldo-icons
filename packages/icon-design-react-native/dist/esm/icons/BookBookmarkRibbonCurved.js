import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BookBookmarkRibbonCurved = forwardRef(function BookBookmarkRibbonCurved(
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
    createElement(Path, {"d":"M19 14L19 19","key":"0"}),
    createElement(Path, {"d":"M16 19L20 19","key":"1"}),
    createElement(Path, {"d":"M4 16.5L4 4.5C4 3.117 5.117 2 6.5 2L19 2C19.551 2 20 2.449 20 3L20 13C20 13.551 19.551 14 19 14L6.5 14C5.117 14 4 15.117 4 16.5C4 17.883 5.117 19 6.5 19L10 19","key":"2"}),
    createElement(Path, {"d":"M9 2L9 14","key":"3"}),
    createElement(Path, {"d":"M10 17L10 22L13 21L16 22L16 17Z","key":"4"})
  );
});

BookBookmarkRibbonCurved.displayName = 'BookBookmarkRibbonCurved';

export default BookBookmarkRibbonCurved;
export { BookBookmarkRibbonCurved };

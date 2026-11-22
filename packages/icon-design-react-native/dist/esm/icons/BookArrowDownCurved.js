import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BookArrowDownCurved = forwardRef(function BookArrowDownCurved(
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
    createElement(Path, {"d":"M4 18L4 5C4 3.344 5.344 2 7 2L20 2L20 14","key":"0"}),
    createElement(Path, {"d":"M20 18L8 18","key":"1"}),
    createElement(Path, {"d":"M20 14L8 14C5.789 14 4 15.789 4 18C4 20.211 5.789 22 8 22L20 22","key":"2"}),
    createElement(Path, {"d":"M12 5L12 11","key":"3"}),
    createElement(Path, {"d":"M9 8L12 11L15 8","key":"4"})
  );
});

BookArrowDownCurved.displayName = 'BookArrowDownCurved';

export default BookArrowDownCurved;
export { BookArrowDownCurved };

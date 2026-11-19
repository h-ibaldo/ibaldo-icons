import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkXRound = forwardRef(function BookmarkXRound(
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
    createElement(Path, {"d":"M16.000000026696398,1.999999999998181h-8c-1.656854249494245,0-3,1.343145750509393-3,3v17l7-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750507574-3-3-3Z","key":"0"}),
    createElement(Line, {"x1":"10.000000015916157","y1":"12.000000031348463","x2":"14.000000053394615","y2":"7.999999999998181","key":"1"}),
    createElement(Line, {"x1":"10.000000016096237","y1":"7.999999999818101","x2":"14.000000053216354","y2":"12.000000031528543","key":"2"})
  );
});

BookmarkXRound.displayName = 'BookmarkXRound';

export default BookmarkXRound;
export { BookmarkXRound };

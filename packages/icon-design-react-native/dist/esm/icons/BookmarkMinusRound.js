import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkMinusRound = forwardRef(function BookmarkMinusRound(
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
    createElement(Path, {"d":"M16.000000026694579,1.999999999998181h-7.999999999999091c-1.656854249493335,0-3,1.343145750509393-3,3v17l6.999999999999091-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750505755-3-3-3Z","key":"0"}),
    createElement(Line, {"x1":"8.999999999996362","y1":"9.999999999998181","x2":"14.999999999996362","y2":"9.999999999998181","key":"1"})
  );
});

BookmarkMinusRound.displayName = 'BookmarkMinusRound';

export default BookmarkMinusRound;
export { BookmarkMinusRound };

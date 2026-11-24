import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookmarkXCorner = forwardRef(function BookmarkXCorner(
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
    createElement(Path, {"d":"M11.000000000003638,2.999999999998181h-5.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-11.000000000009095","key":"0"}),
    createElement(Line, {"x1":"15.999999999912689","y1":"5.999999999989086","x2":"19.999999999912689","y2":"1.999999999989086","key":"1"}),
    createElement(Line, {"x1":"20.000000000003638","y1":"5.999999999898137","x2":"15.999999999822649","y2":"2.000000000078217","key":"2"})
  );
});

BookmarkXCorner.displayName = 'BookmarkXCorner';

export default BookmarkXCorner;
export { BookmarkXCorner };

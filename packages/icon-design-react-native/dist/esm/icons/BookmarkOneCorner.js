import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const BookmarkOneCorner = forwardRef(function BookmarkOneCorner(
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
    createElement(Path, {"d":"M13.000000026693669,2.999999999998181h-7c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-8","key":"0"}),
    createElement(Polyline, {"points":"18.000000026693669 1.999999999998181 19.000000026693669 1.999999999998181 19.000000026693669 8.999999999998181","key":"1"})
  );
});

BookmarkOneCorner.displayName = 'BookmarkOneCorner';

export default BookmarkOneCorner;
export { BookmarkOneCorner };

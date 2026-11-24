import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Polyline } from 'react-native-svg';

const BookmarkCheckCircleLarge = forwardRef(function BookmarkCheckCircleLarge(
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
    createElement(Polyline, {"points":"13.999999973304512 7.499999997568011 15.499999973304512 9.499999997568011 17.999999973304512 6.499999997568011","key":"0"}),
    createElement(Path, {"d":"M16,1.999999999998181H2.999999973299964c-.552307128899884,0-1,.447692871090112-1,1v19l7-4,7.000000000004547,4v-8","key":"1"}),
    createElement(Circle, {"cx":"15.999999975731725","cy":"7.999999997570285","r":"5.999999997574037","key":"2"})
  );
});

BookmarkCheckCircleLarge.displayName = 'BookmarkCheckCircleLarge';

export default BookmarkCheckCircleLarge;
export { BookmarkCheckCircleLarge };

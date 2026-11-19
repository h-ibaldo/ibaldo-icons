import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const BookmarkOffRound = forwardRef(function BookmarkOffRound(
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
    createElement(Path, {"d":"M19.000000026691851,8.999999999998181v-4c0-1.656854249490607-1.343145750508484-3-3-3h-7.999999999996362","key":"0"}),
    createElement(Polyline, {"points":"5.000000026691851 5.752474922528563 5.000000026691851 21.999999999998181 12.000000026691851 17.999999999998181 19.000000026691851 21.999999999998181 19.000000026691851 13.349999999998545","key":"1"}),
    createElement(Line, {"x1":"2.000000026695488","y1":"3.999999999998181","x2":"22.000000026695488","y2":"14.999999999998181","key":"2"})
  );
});

BookmarkOffRound.displayName = 'BookmarkOffRound';

export default BookmarkOffRound;
export { BookmarkOffRound };

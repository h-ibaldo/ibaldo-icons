import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const BookBookmarkUnderline = forwardRef(function BookBookmarkUnderline(
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
    createElement(Polyline, {"points":"15.000000026695488 1.999999999998181 15.000000026695488 10.999999999998181 12.000000026695488 8.999999999998181 9.000000026695488 10.999999999998181 9.000000026695488 1.999999999998181","key":"0"}),
    createElement(Rect, {"x":"4.000000026695488","y":"1.999999999998181","width":"15.999999999998181","height":"16","key":"1"}),
    createElement(Line, {"x1":"4.000000026695488","y1":"21.999999999998181","x2":"20.000000026695488","y2":"21.999999999998181","key":"2"})
  );
});

BookBookmarkUnderline.displayName = 'BookBookmarkUnderline';

export default BookBookmarkUnderline;
export { BookBookmarkUnderline };

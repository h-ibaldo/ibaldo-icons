import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const BookmarkPage2 = forwardRef(function BookmarkPage2(
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
    createElement(Polyline, {"points":"2.000000026697307 1.999999999998181 22.000000026697307 1.999999999998181 22.000000026697307 21.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"11.000000026697307 1.999999999998181 11.000000026697307 13.999999999998181 14.000000026697307 11.999999999998181 17.000000026697307 13.999999999998181 17.000000026697307 1.999999999998181","key":"1"}),
    createElement(Line, {"x1":"2.000000026697307","y1":"9.999999999998181","x2":"7.000000026697307","y2":"9.999999999998181","key":"2"}),
    createElement(Line, {"x1":"2.000000026697307","y1":"13.999999999998181","x2":"7.000000026697307","y2":"13.999999999998181","key":"3"}),
    createElement(Line, {"x1":"2.000000026697307","y1":"17.999999999998181","x2":"17.000000026697307","y2":"17.999999999998181","key":"4"}),
    createElement(Line, {"x1":"2.000000026697307","y1":"21.999999999998181","x2":"17.000000026697307","y2":"21.999999999998181","key":"5"})
  );
});

BookmarkPage2.displayName = 'BookmarkPage2';

export default BookmarkPage2;
export { BookmarkPage2 };

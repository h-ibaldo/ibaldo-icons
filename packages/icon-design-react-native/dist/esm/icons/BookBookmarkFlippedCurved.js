import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const BookBookmarkFlippedCurved = forwardRef(function BookBookmarkFlippedCurved(
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
    createElement(Path, {"d":"M4.000000026699126,5.999999999989086v11.999999992738594c0,2.209138997910486,1.79086099846063,3.999999994361133,3.999999996360202,3.999999996369297l12.000000003639798.000000010892109v-12l-12.000003836088581.000000122938218c-2.2091368740912.000000022631866-3.999996163911419-1.790859248849301-3.999996163911419-3.999996122929588v-.00000799999907c0-2.209136883520841,1.790859298831492-3.999996161939634,3.99999618234142-3.999996136761183l12.00000381765858.000000136760718","key":"0"}),
    createElement(Line, {"x1":"8.000000026699126","y1":"5.999999999989086","x2":"20.000000026699126","y2":"5.999999999989086","key":"1"}),
    createElement(Polyline, {"points":"10.000000026699126 9.999999999989086 10.000000026699126 17.999999999998181 13.000000026699126 15.999999999998181 16.000000026699126 17.999999999998181 16.000000026699126 9.999999999989086","key":"2"})
  );
});

BookBookmarkFlippedCurved.displayName = 'BookBookmarkFlippedCurved';

export default BookBookmarkFlippedCurved;
export { BookBookmarkFlippedCurved };

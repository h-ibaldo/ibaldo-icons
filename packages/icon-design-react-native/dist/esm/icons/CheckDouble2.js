import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const CheckDouble2 = forwardRef(function CheckDouble2(
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
    createElement(Polyline, {"points":"7.974731440090181 11.000000003874447 12.974731440090181 17.000000003874447 20.974731440090181 7.000000003874447","key":"0"}),
    createElement(Line, {"x1":"2.974731440090181","y1":"11.000000003874447","x2":"7.974731440090181","y2":"17.000000003874447","key":"1"}),
    createElement(Line, {"x1":"12.709411615869612","y1":"11.081604007787973","x2":"15.974731440090181","y2":"7.000000003874447","key":"2"})
  );
});

CheckDouble2.displayName = 'CheckDouble2';

export default CheckDouble2;
export { CheckDouble2 };

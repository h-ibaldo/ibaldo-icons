import { createElement, forwardRef } from 'react';
import Svg, { Polyline } from 'react-native-svg';

const CheckDoubleJoined = forwardRef(function CheckDoubleJoined(
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
    createElement(Polyline, {"points":"3.974731440090181 13.000000003874447 6.974731440090181 16.000000003874447 13.974731440090181 8.000000003874447","key":"0"}),
    createElement(Polyline, {"points":"9.974731440090181 13.000000003874447 12.974731440090181 16.000000003874447 19.974731440090181 8.000000003874447","key":"1"})
  );
});

CheckDoubleJoined.displayName = 'CheckDoubleJoined';

export default CheckDoubleJoined;
export { CheckDoubleJoined };

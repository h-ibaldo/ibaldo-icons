import { createElement, forwardRef } from 'react';
import Svg, { Polyline } from 'react-native-svg';

const CheckLarge = forwardRef(function CheckLarge(
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
    createElement(Polyline, {"points":"1.974731440080177 12.250000003874447 8.974731440080177 19.000000003874447 21.974731440080177 5.000000003874447","key":"0"})
  );
});

CheckLarge.displayName = 'CheckLarge';

export default CheckLarge;
export { CheckLarge };

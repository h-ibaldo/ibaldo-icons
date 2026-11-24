import { createElement, forwardRef } from 'react';
import Svg, { Polyline } from 'react-native-svg';

const CheckTall = forwardRef(function CheckTall(
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
    createElement(Polyline, {"points":"4.974731440080177 13.000000003874447 9.474731440080177 19.000000003874447 18.974731440080177 5.000000003874447","key":"0"})
  );
});

CheckTall.displayName = 'CheckTall';

export default CheckTall;
export { CheckTall };

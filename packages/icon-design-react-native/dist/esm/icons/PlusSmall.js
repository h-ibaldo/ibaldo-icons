import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const PlusSmall = forwardRef(function PlusSmall(
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
    createElement(Line, {"x1":"11.97","y1":"7","x2":"11.97","y2":"17","key":"0"}),
    createElement(Line, {"x1":"16.97","y1":"12","x2":"6.97","y2":"12","key":"1"})
  );
});

PlusSmall.displayName = 'PlusSmall';

export default PlusSmall;
export { PlusSmall };

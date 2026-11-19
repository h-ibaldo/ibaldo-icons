import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';

const FunnelSimple = forwardRef(function FunnelSimple(
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
    createElement(Polygon, {"points":"12 15.999999999998181 2 2.999999999998181 22 2.999999999998181 12 15.999999999998181","key":"0"}),
    createElement(Line, {"x1":"12","y1":"15.999999999998181","x2":"12","y2":"20.999999999998181","key":"1"})
  );
});

FunnelSimple.displayName = 'FunnelSimple';

export default FunnelSimple;
export { FunnelSimple };

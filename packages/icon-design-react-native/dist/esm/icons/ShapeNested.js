import { createElement, forwardRef } from 'react';
import Svg, { Polygon, Rect } from 'react-native-svg';

const ShapeNested = forwardRef(function ShapeNested(
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
    createElement(Rect, {"x":"2.00000000018008","y":"2.000000000446562","width":"20","height":"20","key":"0"}),
    createElement(Polygon, {"points":"10.00000000018008 13.000000000448381 12.00000000018008 10.000000000448381 14.00000000018008 13.000000000448381 10.00000000018008 13.000000000448381","key":"1"}),
    createElement(Polygon, {"points":"8.50000000018008 18.000000000448381 15.50000000018008 18.000000000448381 19.00000000018008 12.000000000448381 15.50000000018008 6.000000000448381 8.50000000018008 6.000000000448381 5.00000000018008 12.000000000448381 8.50000000018008 18.000000000448381","key":"2"})
  );
});

ShapeNested.displayName = 'ShapeNested';

export default ShapeNested;
export { ShapeNested };

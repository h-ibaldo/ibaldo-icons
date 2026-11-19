import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const TabMinusSharp = forwardRef(function TabMinusSharp(
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
    createElement(Polyline, {"points":"12.149805223290059 21.998782740736715 2.050537109160359 21.998782740736715 2.050537109160359 1.998782740736715 10.050537109160359 1.998782740736715 13.050537109160359 5.998782740736715 22.050537109160359 5.998782740736715 22.050537109160359 13.998782740736715","key":"0"}),
    createElement(Polyline, {"points":"15.050537109160359 1.998782740736715 22.050537109160359 1.998782740736715 22.050537109160359 5.998782740736715","key":"1"}),
    createElement(Line, {"x1":"16.050537109160359","y1":"18.998782740733986","x2":"22.050537109160359","y2":"18.998782740733986","key":"2"})
  );
});

TabMinusSharp.displayName = 'TabMinusSharp';

export default TabMinusSharp;
export { TabMinusSharp };

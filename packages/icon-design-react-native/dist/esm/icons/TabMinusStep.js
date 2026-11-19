import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const TabMinusStep = forwardRef(function TabMinusStep(
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
    createElement(Polyline, {"points":"12.149805223280055 21.998782740736715 2.050537109160359 21.998782740736715 2.050537109160359 1.998782740736715 11.050537109160359 1.998782740736715 11.050537109160359 5.998782740736715 22.050537109160359 5.998782740736715 22.050537109160359 13.998782740736715","key":"0"}),
    createElement(Line, {"x1":"22.050537109160359","y1":"1.998782740736715","x2":"15.050537109160359","y2":"1.998782740736715","key":"1"}),
    createElement(Line, {"x1":"16.050537109160359","y1":"18.998782740733986","x2":"22.050537109160359","y2":"18.998782740733986","key":"2"})
  );
});

TabMinusStep.displayName = 'TabMinusStep';

export default TabMinusStep;
export { TabMinusStep };

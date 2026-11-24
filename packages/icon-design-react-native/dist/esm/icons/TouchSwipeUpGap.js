import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const TouchSwipeUpGap = forwardRef(function TouchSwipeUpGap(
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
    createElement(Polyline, {"points":"9.025268549155953 4.998782739599847 12.025268549155953 1.998782739599847 15.025268549155953 4.998782739599847","key":"0"}),
    createElement(Line, {"x1":"12.025268549155953","y1":"9.998782739599847","x2":"12.025268549155953","y2":"1.998782739599847","key":"1"}),
    createElement(Circle, {"cx":"12.025268549155953","cy":"17.998782739599847","r":"4","key":"2"})
  );
});

TouchSwipeUpGap.displayName = 'TouchSwipeUpGap';

export default TouchSwipeUpGap;
export { TouchSwipeUpGap };

import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const TabPlusSharp = forwardRef(function TabPlusSharp(
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
    createElement(Polyline, {"points":"13.12453666833062 21.998782737328838 2.025268554200011 21.998782737328838 2.025268554200011 1.998782737328838 10.025268554200011 1.998782737328838 13.025268554200011 5.998782737328838 22.025268554200011 5.998782737328838 22.025268554200011 12.872867879995283","key":"0"}),
    createElement(Polyline, {"points":"15.025268554200011 1.998782737328838 22.025268554200011 1.998782737328838 22.025268554200011 5.998782737328838","key":"1"}),
    createElement(Line, {"x1":"19.025268554189097","y1":"21.998782737328838","x2":"19.025268554189097","y2":"15.998782737328838","key":"2"}),
    createElement(Line, {"x1":"16.025268554200011","y1":"18.998782737328838","x2":"22.025268554200011","y2":"18.998782737328838","key":"3"})
  );
});

TabPlusSharp.displayName = 'TabPlusSharp';

export default TabPlusSharp;
export { TabPlusSharp };

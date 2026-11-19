import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Path, Polyline } from 'react-native-svg';

const ArrowRepeatCompactOff = forwardRef(function ArrowRepeatCompactOff(
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
    createElement(Polyline, {"points":"14.999999999548891 2 17.999999999688953 4.999999999870852 14.999999999818101 8","key":"0"}),
    createElement(Line, {"x1":"2.999999999998181","y1":"4","x2":"21","y2":"20","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Path, {"d":"M18,5h-7c-1.84136962890625,0-3.51153564453125.716552734380457-4.76123046875,1.87890625","key":"0"}),
      createElement(Path, {"d":"M4.337646484375,9.855712890630457c-.21746826171875.676147460939319-.337646484375,1.395874023439319-.337646484375,2.144287109369543v1","key":"1"})),
    createElement(Polyline, {"points":"9.00000000044929 22 6.000000000309228 19.000000000130967 9.000000000178261 16","key":"3"}),
    createElement(G, {"key":"4"},
      createElement(Path, {"d":"M6,19h7c1.84136962890625,0,3.51153564453125-.716552734369543,4.76123046875-1.87890625","key":"0"}),
      createElement(Path, {"d":"M19.662353515625,14.144287109380457c.21746826171875-.676147460939319.337646484375-1.395874023438409.337646484375-2.144287109380457v-1","key":"1"}))
  );
});

ArrowRepeatCompactOff.displayName = 'ArrowRepeatCompactOff';

export default ArrowRepeatCompactOff;
export { ArrowRepeatCompactOff };

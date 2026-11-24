import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Path } from 'react-native-svg';

const WindowPlusCirclePlain = forwardRef(function WindowPlusCirclePlain(
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
    createElement(Path, {"d":"M9.999999993633537,21.998779299956368h-5c-1.656854249500611,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750499389-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v5","key":"0"}),
    createElement(Line, {"x1":"1.999999993633537","y1":"7.998779299956368","x2":"21.999999993633537","y2":"7.998779299956368","key":"1"}),
    createElement(Circle, {"cx":"16.999999993633537","cy":"16.998779299956368","r":"5","key":"2"}),
    createElement(G, {"key":"3"},
      createElement(Line, {"x1":"16.999999993633537","y1":"14.998779299956368","x2":"16.999999993633537","y2":"18.998779299956368","key":"0"}),
      createElement(Line, {"x1":"18.999999993633537","y1":"16.998779299865419","x2":"14.999999993633537","y2":"16.99877930004368","key":"1"}))
  );
});

WindowPlusCirclePlain.displayName = 'WindowPlusCirclePlain';

export default WindowPlusCirclePlain;
export { WindowPlusCirclePlain };

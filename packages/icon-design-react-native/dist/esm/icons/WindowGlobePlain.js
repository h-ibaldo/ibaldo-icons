import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const WindowGlobePlain = forwardRef(function WindowGlobePlain(
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
    createElement(Path, {"d":"M9.499999993639904,21.998779299956368h-4.5c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249479693,0,3,1.343145750506665,3,3v4.5","key":"0"}),
    createElement(Line, {"x1":"1.999999993639904","y1":"7.998779299956368","x2":"21.999999993639904","y2":"7.998779299956368","key":"1"}),
    createElement(Circle, {"cx":"16.499999993657411","cy":"16.498779299955459","r":"5.499999999995794","key":"2"}),
    createElement(Line, {"x1":"10.999999993639904","y1":"16.498779299956368","x2":"21.999999993639904","y2":"16.498779299956368","key":"3"}),
    createElement(Path, {"d":"M17.619506829580132,21.884155276518868l.312927246090112-1.1474609375c.756774902340112-2.77459716796875.756774902340112-5.70123291015625,0-8.475830078125l-.312927246090112-1.1474609375","key":"4"}),
    createElement(Path, {"d":"M15.472900384260356,11.098083499175118l-.317077636710565,1.16278076171875c-.756713867190228,2.77459716796875-.756713867190228,5.70123291015625,0,8.475830078125l.317077636710565,1.16278076171875","key":"5"})
  );
});

WindowGlobePlain.displayName = 'WindowGlobePlain';

export default WindowGlobePlain;
export { WindowGlobePlain };

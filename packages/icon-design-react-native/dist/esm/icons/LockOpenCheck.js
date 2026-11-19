import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline, Rect } from 'react-native-svg';

const LockOpenCheck = forwardRef(function LockOpenCheck(
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
    createElement(Polyline, {"points":"8.949462885139837 16.000000006628397 10.949462885139837 18.000000000298314 14.949462885139837 14.000000000480213","key":"0"}),
    createElement(Rect, {"x":"3.949462885139837","y":"10.000000000480213","width":"16","height":"12","rx":"1","ry":"1","key":"1"}),
    createElement(Path, {"d":"M16.527343744520294,5.000000000480213c-.772216796880457-1.764404296875-2.528686523440228-3-4.577880859380457-3-2.761474609369543,0-5,2.23858642578125-5,5v3","key":"2"})
  );
});

LockOpenCheck.displayName = 'LockOpenCheck';

export default LockOpenCheck;
export { LockOpenCheck };

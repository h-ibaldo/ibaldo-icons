import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const LockOpenKeyholeRound = forwardRef(function LockOpenKeyholeRound(
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
    createElement(Circle, {"cx":"11.949462885139837","cy":"15.000000000480213","r":"7.000000000000001","key":"0"}),
    createElement(Line, {"x1":"11.949462885139837","y1":"18.000000000480213","x2":"11.949462885139837","y2":"14.000000000480213","key":"1"}),
    createElement(Circle, {"cx":"11.949462885139837","cy":"13.000000000480213","r":"1","key":"2"}),
    createElement(Path, {"d":"M16.527343744110112,5.000000000480213c-.772216796870453-1.764404296875-2.528686523430224-3-4.577880859370453-3-2.761413574219659,0-5,2.23858642578125-5,5v3","key":"3"})
  );
});

LockOpenKeyholeRound.displayName = 'LockOpenKeyholeRound';

export default LockOpenKeyholeRound;
export { LockOpenKeyholeRound };

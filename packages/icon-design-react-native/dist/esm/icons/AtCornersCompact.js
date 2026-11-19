import { createElement, forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const AtCornersCompact = forwardRef(function AtCornersCompact(
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
    createElement(Path, {"d":"M1.974731450037325,6.00000000046839v-2c0-1.104569499661011.895430500338989-2,2-2h2","key":"0"}),
    createElement(Path, {"d":"M21.974731450039144,18.00000000046839v2c0,1.10456949966283-.895430500338989,2-2,2h-2","key":"1"}),
    createElement(Path, {"d":"M1.974731450037325,18.00000000046839v2c0,1.10456949966283.895430500338989,2,2,2h2","key":"2"}),
    createElement(Path, {"d":"M21.974731450039144,6.00000000046839v-2c0-1.104569499661011-.895430500338989-2-2-2h-2","key":"3"}),
    createElement(Rect, {"x":"9.974731443115047","y":"9.000000000246033","width":"3.99999998993917","height":"5.999999999999062","rx":"1.99999798339126","ry":"1.99999798339126","key":"4"}),
    createElement(Path, {"d":"M13.974731450047329,19.00000000046839h-4c-2.20913899932566,0-4-1.790861000676159-4-4v-5.999999999998181c0-2.209138999322022,1.79086100067434-4,4-4h4c2.20913899932566,0,4,1.790861000677978,4,4v1.999999999998181","key":"5"}),
    createElement(Path, {"d":"M13.974731450047329,13.00000000046839v.000001999998858c0,1.104568388795087.895429604908713,1.999998000001142,1.999997999999323,1.999998000001142h.000004000001354c1.10456839509061,0,1.999997999999323-.895429604905985,1.999997999999323-1.999998000001142v-2.000001999998858","key":"6"})
  );
});

AtCornersCompact.displayName = 'AtCornersCompact';

export default AtCornersCompact;
export { AtCornersCompact };

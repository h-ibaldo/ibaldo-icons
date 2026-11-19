import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const AntennaSides = forwardRef(function AntennaSides(
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
    createElement(Path, {"d":"M16.242640686859886,4.828427124806694c2.343145750430267,2.343145750328404,2.343145750510303,6.142135623809736.000000000190994,8.485281374240003","key":"0"}),
    createElement(Path, {"d":"M7.757359312810877,13.313708499235872c-2.343145750430267-2.343145750324766-2.343145750521217-6.142135623806098-.000000000190994-8.485281374236365","key":"1"}),
    createElement(Path, {"d":"M19.071067811539251,1.999999999998181c3.905242917389842,3.905242917211581,3.905242917531723,10.236892706343497.000000000320142,14.1421356237297","key":"2"}),
    createElement(Path, {"d":"M4.928932188129693,16.142135624048024c-3.905242917389842-3.905242917211581-3.905242917529904-10.236892706347135-.000000000320142-14.142135623733338","key":"3"}),
    createElement(Circle, {"cx":"11.999999999829015","cy":"9.071067812181354","r":"2","key":"4"}),
    createElement(Line, {"x1":"8.999999999829015","y1":"21.999999999998181","x2":"11.999999999829015","y2":"11.071067812024921","key":"5"}),
    createElement(Line, {"x1":"15.000000000080036","y1":"21.999999999932697","x2":"11.999999999588908","y2":"11.071067812090405","key":"6"}),
    createElement(Line, {"x1":"18","y1":"21.999999999998181","x2":"6","y2":"21.999999999998181","key":"7"})
  );
});

AntennaSides.displayName = 'AntennaSides';

export default AntennaSides;
export { AntennaSides };

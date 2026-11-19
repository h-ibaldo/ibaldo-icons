import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const HotspotSides = forwardRef(function HotspotSides(
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
    createElement(Path, {"d":"M16.217372136529775,7.757359313263805c2.343145750430267,2.343145750326585,2.343145750510303,6.142135623807917.000000000190084,8.485281374238184","key":"0"}),
    createElement(Path, {"d":"M7.732090762479856,16.242640687691164c-2.343145750430267-2.343145750324766-2.343145750519398-6.142135623806098-.000000000190084-8.485281374236365","key":"1"}),
    createElement(Path, {"d":"M19.04579926121005,4.928932188454382c3.905242917389842,3.905242917211581,3.905242917529904,10.236892706344406.000000000320142,14.142135623728791","key":"2"}),
    createElement(Path, {"d":"M4.903663637800491,19.071067812503316c-3.905242917390751-3.905242917211581-3.905242917530813-10.236892706347135-.000000000320142-14.142135623731519","key":"3"}),
    createElement(Circle, {"cx":"11.974731449499814","cy":"12.000000000636646","r":"2","key":"4"})
  );
});

HotspotSides.displayName = 'HotspotSides';

export default HotspotSides;
export { HotspotSides };

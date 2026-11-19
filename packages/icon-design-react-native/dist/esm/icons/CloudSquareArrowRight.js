import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const CloudSquareArrowRight = forwardRef(function CloudSquareArrowRight(
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
    createElement(Path, {"d":"M1.999999999996362,8.999999999727152v8.000000000271029c0,2.761423749159803,2.238576250845654,5,5,5h10c2.761423749154346,0,5-2.238576250840197,5-5V6.999999999998181c0-2.761423749159803-2.238576250845654-5-5-5h-5","key":"0"}),
    createElement(Polyline, {"points":"5.999999999996362 6.00000000026921 7.999999999996362 4.00000000026921 5.999999999996362 2.00000000026921","key":"1"}),
    createElement(Line, {"x1":"1.999999999996362","y1":"4.00000000026921","x2":"7.999999999996362","y2":"4.00000000026921","key":"2"}),
    createElement(Path, {"d":"M15.999999999996362,12.050415038787833v-1.550415039069776c0-1.932983398430224-1.5670166015625-3.5-3.5-3.5-1.77740478515625,0-3.2293701171875,1.329650878909888-3.4542236328125,3.045776367189319-1.71612548828125.224853515630457-3.0457763671875,1.676818847659888-3.0457763671875,3.454223632810681,0,1.932983398439319,1.5670166015625,3.5,3.5,3.5h6c1.3807373046875,0,2.5-1.119262695310681,2.5-2.5,0-1.20947265625-.85888671875-2.217895507810681-2-2.449584960930224Z","key":"3"})
  );
});

CloudSquareArrowRight.displayName = 'CloudSquareArrowRight';

export default CloudSquareArrowRight;
export { CloudSquareArrowRight };

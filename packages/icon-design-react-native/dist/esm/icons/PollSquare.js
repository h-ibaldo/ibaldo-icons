import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const PollSquare = forwardRef(function PollSquare(
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
    createElement(Line, {"x1":"5.99999999955071","y1":"17.99999999955071","x2":"5.99999999991087","y2":"9.99999999955071","key":"0"}),
    createElement(Line, {"x1":"13.99999999955071","y1":"17.999999999907232","x2":"13.999999999690772","y2":"14.999999999907232","key":"1"}),
    createElement(Line, {"x1":"17.99999999955071","y1":"18.00000000008913","x2":"17.999999999770807","y2":"13.00000000008913","key":"2"}),
    createElement(Line, {"x1":"9.99999999955071","y1":"17.999999999728971","x2":"10.000000000090949","y2":"5.999999999728971","key":"3"}),
    createElement(Rect, {"x":"1.99999999981992","y":"1.999999999818101","width":"20","height":"20","rx":"2.000000000000455","ry":"2.000000000000455","transform":"translate(-.000000000538419 23.999999999097781) rotate(-89.999999997420559)","key":"4"})
  );
});

PollSquare.displayName = 'PollSquare';

export default PollSquare;
export { PollSquare };

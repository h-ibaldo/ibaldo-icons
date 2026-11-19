import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const WindowArrowUpRightBare = forwardRef(function WindowArrowUpRightBare(
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
    createElement(Path, {"d":"M2.000000004900357,15.999999995256076V3.999999995616236c0-1.104569499661011.895430500329894-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2h-12","key":"0"}),
    createElement(Polyline, {"points":"11.000000004900357 17.999999995256076 11.000000004900357 12.999999995256076 6.000000004900357 12.999999995256076","key":"1"}),
    createElement(Line, {"x1":"11.000000004900357","y1":"12.999999995256076","x2":"2.000000004900357","y2":"21.999999995256076","key":"2"}),
    createElement(Line, {"x1":"6.010000004900576","y1":"5.999999995616236","x2":"6.000000004900357","y2":"5.999999995616236","key":"3"}),
    createElement(Line, {"x1":"9.010000004900576","y1":"5.999999995616236","x2":"9.000000004900357","y2":"5.999999995616236","key":"4"}),
    createElement(Line, {"x1":"12.010000004900576","y1":"5.999999995616236","x2":"12.000000004900357","y2":"5.999999995616236","key":"5"})
  );
});

WindowArrowUpRightBare.displayName = 'WindowArrowUpRightBare';

export default WindowArrowUpRightBare;
export { WindowArrowUpRightBare };

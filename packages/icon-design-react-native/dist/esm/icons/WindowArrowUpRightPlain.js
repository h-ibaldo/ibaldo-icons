import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const WindowArrowUpRightPlain = forwardRef(function WindowArrowUpRightPlain(
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
    createElement(Line, {"x1":"2.000000004900357","y1":"6.999999995616236","x2":"22.000000004900357","y2":"6.999999995616236","key":"0"}),
    createElement(Path, {"d":"M2.000000004900357,15.999999995256076V3.999999995616236c0-1.104569499661011.895430500329894-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2h-12","key":"1"}),
    createElement(Polyline, {"points":"11.000000004900357 17.999999995256076 11.000000004900357 12.999999995256076 6.000000004900357 12.999999995256076","key":"2"}),
    createElement(Line, {"x1":"11.000000004900357","y1":"12.999999995256076","x2":"2.000000004900357","y2":"21.999999995256076","key":"3"})
  );
});

WindowArrowUpRightPlain.displayName = 'WindowArrowUpRightPlain';

export default WindowArrowUpRightPlain;
export { WindowArrowUpRightPlain };

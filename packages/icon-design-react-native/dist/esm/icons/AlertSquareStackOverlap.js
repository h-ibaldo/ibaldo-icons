import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const AlertSquareStackOverlap = forwardRef(function AlertSquareStackOverlap(
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
    createElement(Rect, {"x":"3.000000005000402","y":"2.000000003886271","width":"14","height":"16","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"10.000000005000402","y1":"13.010000003887399","x2":"10.000000005000402","y2":"13.000000003886271","key":"1"}),
    createElement(Line, {"x1":"10.000000005000402","y1":"7.000000003886271","x2":"10.000000005000402","y2":"10.000000003886271","key":"2"}),
    createElement(Path, {"d":"M7.000000005000402,18.000000003886271v2c0,1.104569499664649.895430500338989,2,2,2h10c1.104569499659192,0,2-.895430500335351,2-2v-12c0-1.104569499663739-.895430500340808-2-2-2h-2","key":"3"})
  );
});

AlertSquareStackOverlap.displayName = 'AlertSquareStackOverlap';

export default AlertSquareStackOverlap;
export { AlertSquareStackOverlap };

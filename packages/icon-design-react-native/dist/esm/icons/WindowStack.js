import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const WindowStack = forwardRef(function WindowStack(
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
    createElement(Rect, {"x":"2","y":"2","width":"16","height":"16","rx":"2","ry":"2","key":"0"}),
    createElement(Path, {"d":"M18,6h2c1.104569499670106,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500329894,2-2,2h-12c-1.104569499659192,0-2-.895430500338989-2-2v-2","key":"1"}),
    createElement(Line, {"x1":"2","y1":"8","x2":"18","y2":"8","key":"2"}),
    createElement(Line, {"x1":"5.035268548598651","y1":"4.998779303362426","x2":"5.025268548599342","y2":"4.998779303362426","key":"3"}),
    createElement(Line, {"x1":"8.035268548598651","y1":"4.998779303362426","x2":"8.025268548599342","y2":"4.998779303362426","key":"4"})
  );
});

WindowStack.displayName = 'WindowStack';

export default WindowStack;
export { WindowStack };

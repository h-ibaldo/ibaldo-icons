import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const WindowStackShadow = forwardRef(function WindowStackShadow(
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
    createElement(Path, {"d":"M22,8v11.866666666672245c0,1.178207466298772-.955125867019888,2.133333333327755-2.133333333329574,2.133333333327755h-11.866666666669516","key":"1"}),
    createElement(Line, {"x1":"2","y1":"8","x2":"17.999999999999091","y2":"8","key":"2"}),
    createElement(Line, {"x1":"5.035268548598651","y1":"4.998779303362426","x2":"5.025268548599342","y2":"4.998779303362426","key":"3"}),
    createElement(Line, {"x1":"8.035268548598651","y1":"4.998779303362426","x2":"8.025268548599342","y2":"4.998779303362426","key":"4"})
  );
});

WindowStackShadow.displayName = 'WindowStackShadow';

export default WindowStackShadow;
export { WindowStackShadow };

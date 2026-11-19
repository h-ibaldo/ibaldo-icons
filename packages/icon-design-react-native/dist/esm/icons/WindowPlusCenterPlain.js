import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Rect } from 'react-native-svg';

const WindowPlusCenterPlain = forwardRef(function WindowPlusCenterPlain(
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
    createElement(G, {"key":"0"},
      createElement(Line, {"x1":"11.999999993642632","y1":"11.99877929995273","x2":"11.999999993642632","y2":"17.998779299956368","key":"0"}),
      createElement(Line, {"x1":"14.999999993642632","y1":"14.99877929995273","x2":"8.999999993642632","y2":"14.99877929995273","key":"1"})),
    createElement(Rect, {"x":"1.999999993642632","y":"1.998779299956368","width":"20","height":"20","rx":"3","ry":"3","key":"1"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"2"})
  );
});

WindowPlusCenterPlain.displayName = 'WindowPlusCenterPlain';

export default WindowPlusCenterPlain;
export { WindowPlusCenterPlain };

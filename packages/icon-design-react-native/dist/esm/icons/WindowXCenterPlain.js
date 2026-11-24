import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Rect } from 'react-native-svg';

const WindowXCenterPlain = forwardRef(function WindowXCenterPlain(
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
      createElement(Line, {"x1":"13.999999993642632","y1":"12.998779299956368","x2":"9.999999993642632","y2":"16.998779299956368","key":"0"}),
      createElement(Line, {"x1":"13.999999993642632","y1":"16.998779299956368","x2":"9.999999993642632","y2":"12.998779299956368","key":"1"})),
    createElement(Rect, {"x":"1.999999993631718","y":"1.998779299956368","width":"20","height":"20","rx":"3","ry":"3","key":"1"}),
    createElement(Line, {"x1":"1.999999993631718","y1":"7.998779299956368","x2":"21.999999993631718","y2":"7.998779299956368","key":"2"})
  );
});

WindowXCenterPlain.displayName = 'WindowXCenterPlain';

export default WindowXCenterPlain;
export { WindowXCenterPlain };

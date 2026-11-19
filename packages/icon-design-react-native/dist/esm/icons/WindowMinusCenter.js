import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const WindowMinusCenter = forwardRef(function WindowMinusCenter(
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
    createElement(Line, {"x1":"14.999999993633537","y1":"14.998779299956368","x2":"8.999999993633537","y2":"14.998779299956368","key":"0"}),
    createElement(Rect, {"x":"1.999999993633537","y":"1.998779299956368","width":"20","height":"20","rx":"2","ry":"2","key":"1"}),
    createElement(Line, {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368","key":"2"}),
    createElement(Line, {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368","key":"3"}),
    createElement(Line, {"x1":"11.00999999364285","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368","key":"4"}),
    createElement(Line, {"x1":"1.999999993633537","y1":"7.998779299956368","x2":"21.999999993633537","y2":"7.998779299956368","key":"5"})
  );
});

WindowMinusCenter.displayName = 'WindowMinusCenter';

export default WindowMinusCenter;
export { WindowMinusCenter };

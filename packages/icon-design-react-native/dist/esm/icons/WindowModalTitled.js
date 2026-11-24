import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const WindowModalTitled = forwardRef(function WindowModalTitled(
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
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"2","y1":"8","x2":"22","y2":"8","key":"1"}),
    createElement(Line, {"x1":"5.010000000000218","y1":"5","x2":"5","y2":"5","key":"2"}),
    createElement(Line, {"x1":"8.010000000000218","y1":"5","x2":"8","y2":"5","key":"3"}),
    createElement(Line, {"x1":"11.010000000000218","y1":"5","x2":"11","y2":"5","key":"4"}),
    createElement(Rect, {"x":"8","y":"12","width":"11","height":"7","rx":".895591052500095","ry":".895591052500095","key":"5"}),
    createElement(Line, {"x1":"8","y1":"14","x2":"19","y2":"14","key":"6"})
  );
});

WindowModalTitled.displayName = 'WindowModalTitled';

export default WindowModalTitled;
export { WindowModalTitled };

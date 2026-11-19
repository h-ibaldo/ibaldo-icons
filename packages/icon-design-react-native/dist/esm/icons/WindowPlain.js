import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const WindowPlain = forwardRef(function WindowPlain(
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
    createElement(Rect, {"x":"2.00000000018008","y":"2.000000000448381","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"2.00000000018008","y1":"7.000000000448381","x2":"22.00000000018008","y2":"7.000000000448381","key":"1"})
  );
});

WindowPlain.displayName = 'WindowPlain';

export default WindowPlain;
export { WindowPlain };

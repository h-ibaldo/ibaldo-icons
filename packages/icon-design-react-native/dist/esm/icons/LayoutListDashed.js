import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const LayoutListDashed = forwardRef(function LayoutListDashed(
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
    createElement(Rect, {"x":"1.999999994000973","y":"1.998779299967282","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"4.999999994000973","y":"4.998779299967282","width":"2","height":"2","key":"1"}),
    createElement(Rect, {"x":"1.999999994000973","y":"13.998779299967282","width":"8","height":"8","rx":"1","ry":"1","key":"2"}),
    createElement(Rect, {"x":"4.999999994000973","y":"16.998779299967282","width":"2","height":"2","key":"3"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"5.998779299967282","x2":"15.999999994000973","y2":"5.998779299967282","key":"4"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"17.998779299967282","x2":"15.999999994000973","y2":"17.998779299967282","key":"5"}),
    createElement(Line, {"x1":"19.999999994000973","y1":"5.998779299967282","x2":"21.999999994000973","y2":"5.998779299967282","key":"6"}),
    createElement(Line, {"x1":"19.999999994000973","y1":"17.998779299967282","x2":"21.999999994000973","y2":"17.998779299967282","key":"7"})
  );
});

LayoutListDashed.displayName = 'LayoutListDashed';

export default LayoutListDashed;
export { LayoutListDashed };

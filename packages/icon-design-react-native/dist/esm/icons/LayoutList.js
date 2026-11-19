import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const LayoutList = forwardRef(function LayoutList(
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
    createElement(Rect, {"x":"1.999999994000973","y":"1.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"5.998779299956368","x2":"21.999999994000973","y2":"5.998779299956368","key":"1"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"17.998779299956368","x2":"21.999999994000973","y2":"17.998779299956368","key":"2"}),
    createElement(Rect, {"x":"4.999999994000973","y":"4.998779299956368","width":"2","height":"2","key":"3"}),
    createElement(Rect, {"x":"1.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"4"}),
    createElement(Rect, {"x":"4.999999994000973","y":"16.998779299956368","width":"2","height":"2","key":"5"})
  );
});

LayoutList.displayName = 'LayoutList';

export default LayoutList;
export { LayoutList };

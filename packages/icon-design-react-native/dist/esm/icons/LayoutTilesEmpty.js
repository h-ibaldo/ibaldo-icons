import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const LayoutTilesEmpty = forwardRef(function LayoutTilesEmpty(
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
    createElement(Line, {"x1":"13.999999994000973","y1":"14.998779299956368","x2":"21.999999994000973","y2":"14.998779299956368","key":"1"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"17.998779299956368","x2":"21.999999994000973","y2":"17.998779299956368","key":"2"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"20.998779299956368","x2":"17.999999994000973","y2":"20.998779299956368","key":"3"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"2.998779299956368","x2":"21.999999994000973","y2":"2.998779299956368","key":"4"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"5.998779299956368","x2":"21.999999994000973","y2":"5.998779299956368","key":"5"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"8.998779299956368","x2":"17.999999994000973","y2":"8.998779299956368","key":"6"}),
    createElement(Rect, {"x":"1.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"7"})
  );
});

LayoutTilesEmpty.displayName = 'LayoutTilesEmpty';

export default LayoutTilesEmpty;
export { LayoutTilesEmpty };

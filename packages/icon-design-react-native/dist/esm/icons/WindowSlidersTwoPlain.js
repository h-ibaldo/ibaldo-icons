import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const WindowSlidersTwoPlain = forwardRef(function WindowSlidersTwoPlain(
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
    createElement(Rect, {"x":"1.999999993990059","y":"1.998779299956368","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"1.999999993990059","y1":"6.998779299956368","x2":"21.999999993990059","y2":"6.998779299956368","key":"1"}),
    createElement(Line, {"x1":"7.999999994000973","y1":"10.998779299956368","x2":"7.999999994000973","y2":"17.998779299956368","key":"2"}),
    createElement(Line, {"x1":"15.999999994000973","y1":"10.998779299956368","x2":"15.999999994000973","y2":"17.998779299956368","key":"3"}),
    createElement(Line, {"x1":"5.999999994000973","y1":"12.998779299956368","x2":"9.999999994000973","y2":"12.998779299956368","key":"4"}),
    createElement(Line, {"x1":"13.999999994000973","y1":"15.998779299956368","x2":"17.999999994000973","y2":"15.998779299956368","key":"5"})
  );
});

WindowSlidersTwoPlain.displayName = 'WindowSlidersTwoPlain';

export default WindowSlidersTwoPlain;
export { WindowSlidersTwoPlain };

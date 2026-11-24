import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const WindowPlus = forwardRef(function WindowPlus(
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
    createElement(Path, {"d":"M10.999999993642632,21.998779299956368H3.999999993632628c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v7","key":"0"}),
    createElement(Line, {"x1":"1.999999993632628","y1":"7.998779299956368","x2":"21.999999993632628","y2":"7.998779299956368","key":"1"}),
    createElement(Line, {"x1":"17.999999993642632","y1":"13.998779299956368","x2":"17.999999993642632","y2":"21.998779299956368","key":"2"}),
    createElement(Line, {"x1":"21.999999993632628","y1":"17.998779299956368","x2":"13.999999993642632","y2":"17.998779299956368","key":"3"}),
    createElement(Line, {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368","key":"4"}),
    createElement(Line, {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368","key":"5"}),
    createElement(Line, {"x1":"11.00999999364285","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368","key":"6"})
  );
});

WindowPlus.displayName = 'WindowPlus';

export default WindowPlus;
export { WindowPlus };

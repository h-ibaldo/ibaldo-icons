import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Path, Rect } from 'react-native-svg';

const WindowOverlapLeftDottedBack = forwardRef(function WindowOverlapLeftDottedBack(
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
      createElement(Rect, {"x":"1.999999993611709","y":"1.998779299956368","width":"13.000000000010914","height":"13","rx":"2","ry":"2","key":"0"}),
      createElement(Line, {"x1":"1.999999993611709","y1":"5.998779299956368","x2":"14.999999993642632","y2":"5.998779299956368","key":"1"})),
    createElement(G, {"key":"1"},
      createElement(Path, {"d":"M17.999999993622623,8.998779299956368h2.000000000020009c1.104569499659192,0,2,.895430500335351,2,1.999999999996362v9.000000000003638c0,1.104569499661011-.895430500340808,2-2,2h-9.000000000020009c-1.104569499661011,0-2-.895430500338989-2-2v-2","key":"0"}),
      createElement(Line, {"x1":"17.999999993622623","y1":"12.998779299956368","x2":"21.999999993651727","y2":"12.998779299956368","key":"1"})),
    createElement(Line, {"x1":"19.009999993631936","y1":"9.998779299956368","x2":"18.999999993631718","y2":"9.998779299956368","key":"2"}),
    createElement(Line, {"x1":"18.009999993631936","y1":"11.998779299956368","x2":"17.999999993631718","y2":"11.998779299956368","key":"3"}),
    createElement(Line, {"x1":"21.009999993631936","y1":"11.998779299956368","x2":"20.999999993631718","y2":"11.998779299956368","key":"4"})
  );
});

WindowOverlapLeftDottedBack.displayName = 'WindowOverlapLeftDottedBack';

export default WindowOverlapLeftDottedBack;
export { WindowOverlapLeftDottedBack };

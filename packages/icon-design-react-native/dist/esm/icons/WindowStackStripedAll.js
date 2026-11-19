import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const WindowStackStripedAll = forwardRef(function WindowStackStripedAll(
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
    createElement(Line, {"x1":"1.999999990786819","y1":"8.000000000448381","x2":"16.999999990786819","y2":"8.000000000448381","key":"0"}),
    createElement(Line, {"x1":"5.009999990787037","y1":"5.000000000448381","x2":"4.999999990786819","y2":"5.000000000448381","key":"1"}),
    createElement(Line, {"x1":"8.009999990787037","y1":"5.000000000448381","x2":"7.999999990786819","y2":"5.000000000448381","key":"2"}),
    createElement(Rect, {"x":"6.999999990786819","y":"8.000000000448381","width":"15","height":"14","rx":"2","ry":"2","key":"3"}),
    createElement(Path, {"d":"M16.999999990786819,8.000000000448381v-4c0-1.10455322265625-.895446777340112-2-2-2H3.999999990786819c-1.104553222648974,0-2,.89544677734375-2,2v10c0,1.10455322265625.895446777351026,2,2,2h3","key":"4"}),
    createElement(Line, {"x1":"6.999999990786819","y1":"14.000000000448381","x2":"21.999999990786819","y2":"14.000000000448381","key":"5"}),
    createElement(Line, {"x1":"10.009999990787037","y1":"11.000000000448381","x2":"9.999999990786819","y2":"11.000000000448381","key":"6"}),
    createElement(Line, {"x1":"13.009999990787037","y1":"11.000000000448381","x2":"12.999999990786819","y2":"11.000000000448381","key":"7"}),
    createElement(Line, {"x1":"6.999999990786819","y1":"16.000000000448381","x2":"8.999999990797733","y2":"14.000000000448381","key":"8"}),
    createElement(Line, {"x1":"6.999999990786819","y1":"20.000000000448381","x2":"12.999999990797733","y2":"14.000000000448381","key":"9"}),
    createElement(Line, {"x1":"8.999999990786819","y1":"22.000000000448381","x2":"16.999999990797733","y2":"14.000000000448381","key":"10"}),
    createElement(Line, {"x1":"12.999999990786819","y1":"22.000000000448381","x2":"20.999999990797733","y2":"14.000000000448381","key":"11"}),
    createElement(Line, {"x1":"16.999999990786819","y1":"22.000000000448381","x2":"21.999999990786819","y2":"17.000000000448381","key":"12"})
  );
});

WindowStackStripedAll.displayName = 'WindowStackStripedAll';

export default WindowStackStripedAll;
export { WindowStackStripedAll };

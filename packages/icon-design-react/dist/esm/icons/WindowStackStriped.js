import { createElement, forwardRef } from 'react';

const WindowStackStriped = forwardRef(function WindowStackStriped(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('line', {"x1":"1.999999990786819","y1":"7.000000000448381","x2":"16.999999990786819","y2":"7.000000000448381","key":"0"}),
    createElement('rect', {"x":"6.999999990786819","y":"7.000000000448381","width":"15","height":"15","rx":"1.999999999998181","ry":"1.999999999998181","key":"1"}),
    createElement('path', {"d":"M16.999999990786819,7.000000000448381v-3c0-1.10455322265625-.895446777340112-2-2-2H3.999999990786819c-1.104553222648974,0-2,.89544677734375-2,2v11c0,1.10455322265625.895446777351026,2,2,2h3","key":"2"}),
    createElement('line', {"x1":"6.999999990786819","y1":"12.000000000448381","x2":"21.999999990786819","y2":"12.000000000448381","key":"3"}),
    createElement('line', {"x1":"6.999999990786819","y1":"16.000000000448381","x2":"10.999999990797733","y2":"12.000000000448381","key":"4"}),
    createElement('line', {"x1":"1.999999990786819","y1":"7.000000000448381","x2":"6.999999990786819","y2":"2.000000000448381","key":"5"}),
    createElement('line', {"x1":"5.999999990786819","y1":"7.000000000448381","x2":"10.999999990786819","y2":"2.000000000448381","key":"6"}),
    createElement('line', {"x1":"9.999999990786819","y1":"7.000000000448381","x2":"14.999999990786819","y2":"2.000000000448381","key":"7"}),
    createElement('line', {"x1":"13.999999990786819","y1":"7.000000000448381","x2":"16.999999990786819","y2":"4.000000000448381","key":"8"}),
    createElement('line', {"x1":"6.999999990786819","y1":"20.000000000448381","x2":"14.999999990797733","y2":"12.000000000448381","key":"9"}),
    createElement('line', {"x1":"8.999999990786819","y1":"22.000000000448381","x2":"18.999999990797733","y2":"12.000000000448381","key":"10"}),
    createElement('line', {"x1":"12.999999990786819","y1":"22.000000000448381","x2":"21.999999990797733","y2":"13.000000000448381","key":"11"}),
    createElement('line', {"x1":"16.999999990786819","y1":"22.000000000448381","x2":"21.999999990797733","y2":"17.000000000448381","key":"12"})
  );
});

WindowStackStriped.displayName = 'WindowStackStriped';

export default WindowStackStriped;
export { WindowStackStriped };

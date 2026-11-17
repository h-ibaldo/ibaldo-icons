import { createElement, forwardRef } from 'react';

const WindowMusicBare = forwardRef(function WindowMusicBare(
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
    createElement('path', {"d":"M12,21.999999999998181l-8,.000000000001819c-1.104569499661011,0-2-.895430500338989-2-2V3.999999999998181c0-1.104569499661011.895430500338989-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499661011,0,2,.89543050033717,2,2v6","key":"0"}),
    createElement('polyline', {"points":"22 14.999999999998181 19 13.999999999998181 19 20.999999999998181","key":"1"}),
    createElement('ellipse', {"cx":"17.5","cy":"20.999999999998181","rx":"1.5","ry":"1","key":"2"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"5"})
  );
});

WindowMusicBare.displayName = 'WindowMusicBare';

export default WindowMusicBare;
export { WindowMusicBare };

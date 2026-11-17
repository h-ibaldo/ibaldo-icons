import { createElement, forwardRef } from 'react';

const WindowMedalBare = forwardRef(function WindowMedalBare(
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
    createElement('circle', {"cx":"18.50000000018008","cy":"13.500000000448381","r":"3.5","key":"0"}),
    createElement('polyline', {"points":"16.00000000018008 15.944396973104631 16.00000000018008 21.849891819731965 18.50000000018008 20.849891819731965 21.00000000018008 21.849891819731965 21.00000000018008 15.944396973104631","key":"1"}),
    createElement('path', {"d":"M12.00000000018008,22.000000000448381l-8,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v3.150108180716416","key":"2"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"5"})
  );
});

WindowMedalBare.displayName = 'WindowMedalBare';

export default WindowMedalBare;
export { WindowMedalBare };

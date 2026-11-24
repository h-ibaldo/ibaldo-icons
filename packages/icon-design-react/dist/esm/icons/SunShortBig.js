import { createElement, forwardRef } from 'react';

const SunShortBig = forwardRef(function SunShortBig(
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
    createElement('circle', {"cx":"12","cy":"12.000000005924448","r":"5","key":"0"}),
    createElement('line', {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"3.000000005924448","key":"1"}),
    createElement('line', {"x1":"12","y1":"21.000000005924448","x2":"12","y2":"22.000000005924448","key":"2"}),
    createElement('line', {"x1":"22","y1":"12.000000005924448","x2":"21","y2":"12.000000005924448","key":"3"}),
    createElement('line', {"x1":"3","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448","key":"4"}),
    createElement('line', {"x1":"19.071067811710236","y1":"4.928932193904984","x2":"18.36396103053994","y2":"5.636038975104384","key":"5"}),
    createElement('line', {"x1":"5.63603896946006","y1":"18.363961036744513","x2":"4.928932188289764","y2":"19.071067817945732","key":"6"}),
    createElement('line', {"x1":"19.071067812019464","y1":"19.071067817634685","x2":"18.363961030820064","y2":"18.363961036464389","key":"7"}),
    createElement('line', {"x1":"5.636038969179936","y1":"5.636038975384508","x2":"4.928932187980536","y2":"4.928932194216031","key":"8"})
  );
});

SunShortBig.displayName = 'SunShortBig';

export default SunShortBig;
export { SunShortBig };

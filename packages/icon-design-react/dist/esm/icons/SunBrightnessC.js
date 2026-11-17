import { createElement, forwardRef } from 'react';

const SunBrightnessC = forwardRef(function SunBrightnessC(
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
    createElement('circle', {"cx":"12","cy":"12.000000005924448","r":"4","key":"0"}),
    createElement('line', {"x1":"12","y1":"21","x2":"12","y2":"22.000000005924448","key":"1"}),
    createElement('line', {"x1":"12","y1":"3","x2":"12","y2":"2.000000005924448","key":"2"}),
    createElement('line', {"x1":"3.000000005924448","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448","key":"3"}),
    createElement('line', {"x1":"21.000000005924448","y1":"12.000000005924448","x2":"22","y2":"12.000000005924448","key":"4"}),
    createElement('line', {"x1":"5.63603897365374","y1":"18.363961032557199","x2":"4.928932188293402","y2":"19.071067817947551","key":"5"}),
    createElement('line', {"x1":"18.363961034725435","y1":"5.636038970913432","x2":"19.071067811706598","y2":"4.928932193901346","key":"6"}),
    createElement('line', {"x1":"5.636038973367249","y1":"5.636038979577279","x2":"4.928932187975988","y2":"4.92893219421785","key":"7"}),
    createElement('line', {"x1":"18.363961035011016","y1":"18.363961040649883","x2":"19.071067812024012","y2":"19.071067817631047","key":"8"})
  );
});

SunBrightnessC.displayName = 'SunBrightnessC';

export default SunBrightnessC;
export { SunBrightnessC };

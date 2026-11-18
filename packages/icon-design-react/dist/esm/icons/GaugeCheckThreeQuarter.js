import { createElement, forwardRef } from 'react';

const GaugeCheckThreeQuarter = forwardRef(function GaugeCheckThreeQuarter(
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
    createElement('path', {"d":"M12 2L12 5","key":"0"}),
    createElement('path', {"d":"M22 12L19 12","key":"1"}),
    createElement('path', {"d":"M5 12L2 12","key":"2"}),
    createElement('path', {"d":"M7 17L5 19","key":"3"}),
    createElement('path', {"d":"M7 7L5 5","key":"4"}),
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.777 3.137 17.293 4.965 19.105L5 19","key":"5"}),
    createElement('path', {"d":"M13.926 12.535C14.223 11.473 13.602 10.367 12.535 10.074C11.473 9.777 10.371 10.398 10.074 11.465C9.777 12.527 10.398 13.629 11.465 13.926C12.527 14.223 13.629 13.602 13.926 12.535Z","key":"6"}),
    createElement('path', {"d":"M16.617 6.895L13.336 10.523","key":"7"}),
    createElement('path', {"d":"M15 20L17 22L21 18","key":"8"})
  );
});

GaugeCheckThreeQuarter.displayName = 'GaugeCheckThreeQuarter';

export default GaugeCheckThreeQuarter;
export { GaugeCheckThreeQuarter };

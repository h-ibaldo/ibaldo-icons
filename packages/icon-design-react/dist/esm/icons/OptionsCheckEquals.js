import { createElement, forwardRef } from 'react';

const OptionsCheckEquals = forwardRef(function OptionsCheckEquals(
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
    createElement('path', {"d":"M16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16C22 19.313 19.313 22 16 22Z","key":"0"}),
    createElement('path', {"d":"M18 14.5L14 14.5","key":"1"}),
    createElement('path', {"d":"M18 17.5L14 17.5","key":"2"}),
    createElement('path', {"d":"M5.875 7.527L6.977 8.625L9.176 6.426","key":"3"}),
    createElement('path', {"d":"M13 7.027C12.746 4.223 10.395 2.027 7.523 2.027C4.488 2.027 2.023 4.488 2.023 7.527C2.023 10.395 4.223 12.746 7.023 13","key":"4"})
  );
});

OptionsCheckEquals.displayName = 'OptionsCheckEquals';

export default OptionsCheckEquals;
export { OptionsCheckEquals };

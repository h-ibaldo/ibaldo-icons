import { createElement, forwardRef } from 'react';

const OptionsDotsAsterisk = forwardRef(function OptionsDotsAsterisk(
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
    createElement('path', {"d":"M13 7.027C12.746 4.223 10.395 2.027 7.523 2.027C4.488 2.027 2.023 4.488 2.023 7.527C2.023 10.395 4.223 12.746 7.023 13","key":"0"}),
    createElement('path', {"d":"M9.25 7.5L9.25 7.5","key":"1"}),
    createElement('path', {"d":"M5.75 7.5L5.75 7.5","key":"2"}),
    createElement('path', {"d":"M16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16C22 19.313 19.313 22 16 22Z","key":"3"}),
    createElement('path', {"d":"M18 15L14 15","key":"4"}),
    createElement('path', {"d":"M16 15.5L16 13","key":"5"}),
    createElement('path', {"d":"M18 18C17 17.5 16 16.5 16 15","key":"6"}),
    createElement('path', {"d":"M14 18C15 17.5 16 16.5 16 15","key":"7"})
  );
});

OptionsDotsAsterisk.displayName = 'OptionsDotsAsterisk';

export default OptionsDotsAsterisk;
export { OptionsDotsAsterisk };

import { createElement, forwardRef } from 'react';

const DatabaseClock = forwardRef(function DatabaseClock(
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
    createElement('path', {"d":"M21 17C21 19.762 18.762 22 16 22C13.238 22 11 19.762 11 17C11 14.238 13.238 12 16 12C18.762 12 21 14.238 21 17Z","key":"0"}),
    createElement('path', {"d":"M16 15L16 17L18 17","key":"1"}),
    createElement('path', {"d":"M3 8L18 8","key":"2"}),
    createElement('path', {"d":"M3 14L12 14","key":"3"}),
    createElement('path', {"d":"M18 12.422L18 5C18 3.344 16.656 2 15 2L6 2C4.344 2 3 3.344 3 5L3 17C3 18.656 4.344 20 6 20L12.023 20","key":"4"})
  );
});

DatabaseClock.displayName = 'DatabaseClock';

export default DatabaseClock;
export { DatabaseClock };

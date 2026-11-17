import { createElement, forwardRef } from 'react';

const CakeCandles = forwardRef(function CakeCandles(
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
    createElement('path', {"d":"M4 22L4 13.402C4 12.301 4.895 11.402 6 11.402L18 11.402C19.105 11.402 20 12.301 20 13.402L20 22","key":"0"}),
    createElement('path', {"d":"M12 8L12 11.402","key":"1"}),
    createElement('path', {"d":"M2 22L22 22","key":"2"}),
    createElement('path', {"d":"M4 16.07L4.891 16.664C5.563 17.113 6.438 17.113 7.109 16.664L7.891 16.145C8.563 15.695 9.438 15.695 10.109 16.145L10.891 16.664C11.563 17.113 12.438 17.113 13.109 16.664L13.891 16.145C14.563 15.695 15.438 15.695 16.109 16.145L16.891 16.664C17.563 17.113 18.438 17.113 19.109 16.664L20 16.07","key":"3"}),
    createElement('path', {"d":"M11 5L13 3","key":"4"}),
    createElement('path', {"d":"M7 8L7 11.402","key":"5"}),
    createElement('path', {"d":"M6 5L8 3","key":"6"}),
    createElement('path', {"d":"M17 8L17 11.402","key":"7"}),
    createElement('path', {"d":"M16 5L18 3","key":"8"})
  );
});

CakeCandles.displayName = 'CakeCandles';

export default CakeCandles;
export { CakeCandles };

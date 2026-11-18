import { createElement, forwardRef } from 'react';

const CrownBand = forwardRef(function CrownBand(
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
    createElement('path', {"d":"M4 20L3 7L4.141 8.594C5.891 11.047 9.621 10.754 10.973 8.059L12 6L13.027 8.059C14.379 10.754 18.109 11.047 19.859 8.594L21 7L20 20Z","key":"0"}),
    createElement('path', {"d":"M4 16L20 16","key":"1"}),
    createElement('path', {"d":"M4 7C4 7.551 3.555 8 3 8C2.445 8 2 7.551 2 7C2 6.449 2.445 6 3 6C3.555 6 4 6.449 4 7Z","key":"2"}),
    createElement('path', {"d":"M22 7C22 7.551 21.555 8 21 8C20.445 8 20 7.551 20 7C20 6.449 20.445 6 21 6C21.555 6 22 6.449 22 7Z","key":"3"}),
    createElement('path', {"d":"M13 5C13 5.551 12.555 6 12 6C11.445 6 11 5.551 11 5C11 4.449 11.445 4 12 4C12.555 4 13 4.449 13 5Z","key":"4"})
  );
});

CrownBand.displayName = 'CrownBand';

export default CrownBand;
export { CrownBand };

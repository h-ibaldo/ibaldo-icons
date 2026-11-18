import { createElement, forwardRef } from 'react';

const ClockDashedHalfSparse = forwardRef(function ClockDashedHalfSparse(
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
    createElement('path', {"d":"M4.492 18.695C4.934 19.199 5.426 19.656 5.957 20.059","key":"0"}),
    createElement('path', {"d":"M2.027 11.605C2.016 11.773 2 11.934 2 12.105C2 12.617 2.051 13.113 2.125 13.605","key":"1"}),
    createElement('path', {"d":"M5.406 4.598C4.906 5.039 4.449 5.531 4.043 6.063","key":"2"}),
    createElement('path', {"d":"M11 22.055C11.328 22.086 11.664 22.105 12 22.105C12.336 22.105 12.672 22.086 13 22.055C18.055 21.551 22 17.289 22 12.105C22 6.918 18.055 2.656 13 2.156C12.672 2.121 12.336 2.105 12 2.105C11.664 2.105 11.328 2.121 11 2.156","key":"3"}),
    createElement('path', {"d":"M12 7L12 12L17 14","key":"4"})
  );
});

ClockDashedHalfSparse.displayName = 'ClockDashedHalfSparse';

export default ClockDashedHalfSparse;
export { ClockDashedHalfSparse };

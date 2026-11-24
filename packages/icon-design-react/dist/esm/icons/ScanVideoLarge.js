import { createElement, forwardRef } from 'react';

const ScanVideoLarge = forwardRef(function ScanVideoLarge(
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
    createElement('path', {"d":"M2 7L2 5C2 3.344 3.344 2 5 2L7 2","key":"0"}),
    createElement('path', {"d":"M22 7L22 5C22 3.344 20.656 2 19 2L17 2","key":"1"}),
    createElement('path', {"d":"M2 17L2 19C2 20.656 3.344 22 5 22L7 22","key":"2"}),
    createElement('path', {"d":"M22 17L22 19C22 20.656 20.656 22 19 22L17 22","key":"3"}),
    createElement('path', {"d":"M14 10L14 9.156C14 8.516 13.484 8 12.844 8L7.156 8C6.516 8 6 8.516 6 9.156L6 14.844C6 15.484 6.516 16 7.156 16L12.844 16C13.484 16 14 15.484 14 14.844L14 14L17.277 15.637C17.609 15.805 18 15.563 18 15.191L18 8.809C18 8.438 17.609 8.195 17.277 8.363Z","key":"4"})
  );
});

ScanVideoLarge.displayName = 'ScanVideoLarge';

export default ScanVideoLarge;
export { ScanVideoLarge };

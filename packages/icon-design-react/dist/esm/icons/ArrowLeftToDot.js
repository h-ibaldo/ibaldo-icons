import { createElement, forwardRef } from 'react';

const ArrowLeftToDot = forwardRef(function ArrowLeftToDot(
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
    createElement('path', {"d":"M15 15L12 12L15 9","key":"0"}),
    createElement('path', {"d":"M22 12L12 12","key":"1"}),
    createElement('path', {"d":"M5 15C6.656 15 8 13.656 8 12C8 10.344 6.656 9 5 9C3.344 9 2 10.344 2 12C2 13.656 3.344 15 5 15Z","key":"2"})
  );
});

ArrowLeftToDot.displayName = 'ArrowLeftToDot';

export default ArrowLeftToDot;
export { ArrowLeftToDot };

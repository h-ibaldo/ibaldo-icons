import { createElement, forwardRef } from 'react';

const PercentCircle = forwardRef(function PercentCircle(
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
    createElement('path', {"d":"M8 16L16 8","key":"0"}),
    createElement('path', {"d":"M8 9C8 8.449 8.449 8 9 8C9.551 8 10 8.449 10 9C10 9.551 9.551 10 9 10C8.449 10 8 9.551 8 9Z","key":"1"}),
    createElement('path', {"d":"M14 15C14 14.449 14.449 14 15 14C15.551 14 16 14.449 16 15C16 15.551 15.551 16 15 16C14.449 16 14 15.551 14 15Z","key":"2"}),
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"3"})
  );
});

PercentCircle.displayName = 'PercentCircle';

export default PercentCircle;
export { PercentCircle };

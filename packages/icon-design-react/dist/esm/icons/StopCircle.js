import { createElement, forwardRef } from 'react';

const StopCircle = forwardRef(function StopCircle(
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
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement('path', {"d":"M15 16L9 16C8.445 16 8 15.551 8 15L8 9C8 8.449 8.445 8 9 8L15 8C15.555 8 16 8.449 16 9L16 15C16 15.551 15.555 16 15 16Z","key":"1"})
  );
});

StopCircle.displayName = 'StopCircle';

export default StopCircle;
export { StopCircle };

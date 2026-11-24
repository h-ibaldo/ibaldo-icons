import { createElement, forwardRef } from 'react';

const CompassCheck = forwardRef(function CompassCheck(
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
    createElement('path', {"d":"M2 5L4 7L8 3","key":"0"}),
    createElement('path', {"d":"M16 8L10 10L8 16L14 14Z","key":"1"}),
    createElement('path', {"d":"M2.055 11C2.02 11.328 2 11.66 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2","key":"2"})
  );
});

CompassCheck.displayName = 'CompassCheck';

export default CompassCheck;
export { CompassCheck };

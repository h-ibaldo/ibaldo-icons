import { createElement, forwardRef } from 'react';

const CursorUpRipple = forwardRef(function CursorUpRipple(
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
    createElement('path', {"d":"M10.031 22L10.031 17L6 17.133L12.031 7L18 17.133L14.031 17L14.031 22Z","key":"0"}),
    createElement('path', {"d":"M17.285 9C17.422 8.523 17.5 8.02 17.5 7.5C17.5 4.465 15.035 2 12 2C8.961 2 6.5 4.465 6.5 7.5C6.5 8.02 6.578 8.523 6.711 9","key":"1"})
  );
});

CursorUpRipple.displayName = 'CursorUpRipple';

export default CursorUpRipple;
export { CursorUpRipple };

import { createElement, forwardRef } from 'react';

const GlobeTilted = forwardRef(function GlobeTilted(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M8.536 14C10.582 17.544 13.758 19.894 17 20.66C17.958 17.469 17.51 13.544 15.464 10C13.418 6.456 10.242 4.106 7 3.34C6.042 6.531 6.49 10.456 8.536 14Z","key":"1"}),
    createElement('path', {"d":"M3.34 17L20.66 7","key":"2"})
  );
});

GlobeTilted.displayName = 'GlobeTilted';

export default GlobeTilted;
export { GlobeTilted };

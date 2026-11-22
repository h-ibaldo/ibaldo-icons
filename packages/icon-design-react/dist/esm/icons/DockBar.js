import { createElement, forwardRef } from 'react';

const DockBar = forwardRef(function DockBar(
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
    createElement('path', {"d":"M2 19L2 5C2 4.449 2.449 4 3 4L21 4C21.551 4 22 4.449 22 5L22 19C22 19.551 21.551 20 21 20L3 20C2.449 20 2 19.551 2 19Z","key":"0"}),
    createElement('path', {"d":"M18 16L6 16","key":"1"})
  );
});

DockBar.displayName = 'DockBar';

export default DockBar;
export { DockBar };

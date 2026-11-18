import { createElement, forwardRef } from 'react';

const MoonCircle = forwardRef(function MoonCircle(
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
    createElement('path', {"d":"M22 12A10 10 0 1 1 2 12A10 10 0 1 1 22 12Z","key":"0"}),
    createElement('path', {"d":"M17.5 12.864A5.537 5.537 0 1 1 11.136 6.5","key":"1"}),
    createElement('path', {"d":"M17.5 12.864A4.922 4.922 0 0 1 11.136 6.5","key":"2"})
  );
});

MoonCircle.displayName = 'MoonCircle';

export default MoonCircle;
export { MoonCircle };

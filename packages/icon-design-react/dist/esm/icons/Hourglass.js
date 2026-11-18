import { createElement, forwardRef } from 'react';

const Hourglass = forwardRef(function Hourglass(
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
    createElement('path', {"d":"M16.922 7.898L12 12L7.078 7.898C6.395 7.328 6 6.484 6 5.594L6 2L18 2L18 5.594C18 6.484 17.605 7.328 16.922 7.898Z","key":"0"}),
    createElement('path', {"d":"M7.078 16.102L12 12L16.922 16.102C17.605 16.672 18 17.516 18 18.406L18 22L6 22L6 18.406C6 17.516 6.395 16.672 7.078 16.102Z","key":"1"})
  );
});

Hourglass.displayName = 'Hourglass';

export default Hourglass;
export { Hourglass };

import { createElement, forwardRef } from 'react';

const PlugCable = forwardRef(function PlugCable(
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
    createElement('path', {"d":"M4 2L4 5","key":"0"}),
    createElement('path', {"d":"M20 22L20 19","key":"1"}),
    createElement('path', {"d":"M8 2L8 5","key":"2"}),
    createElement('path', {"d":"M16 22L16 19","key":"3"}),
    createElement('path', {"d":"M2 5L10 5L10 7C10 8.105 9.105 9 8 9L4 9C2.895 9 2 8.105 2 7Z","key":"4"}),
    createElement('path', {"d":"M22 19L14 19L14 17C14 15.895 14.895 15 16 15L20 15C21.105 15 22 15.895 22 17Z","key":"5"}),
    createElement('path', {"d":"M6 9L6 15.156C6 17.23 8.762 17.934 9.754 16.113L14.246 7.887C15.238 6.066 18 6.77 18 8.844L18 15","key":"6"})
  );
});

PlugCable.displayName = 'PlugCable';

export default PlugCable;
export { PlugCable };

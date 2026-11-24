import { createElement, forwardRef } from 'react';

const LinkBrokenBurstWide = forwardRef(function LinkBrokenBurstWide(
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
    createElement('path', {"d":"M11 6L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L18 13","key":"0"}),
    createElement('path', {"d":"M13 18L10.449 20.551C8.516 22.484 5.383 22.484 3.449 20.551C1.516 18.617 1.516 15.484 3.449 13.551L6 11","key":"1"}),
    createElement('path', {"d":"M4 9L2 9","key":"2"}),
    createElement('path', {"d":"M5.465 5.465L4.051 4.051","key":"3"}),
    createElement('path', {"d":"M9 4L9 2","key":"4"}),
    createElement('path', {"d":"M20 15L22 15","key":"5"}),
    createElement('path', {"d":"M18.535 18.535L19.949 19.949","key":"6"}),
    createElement('path', {"d":"M15 20L15 22","key":"7"})
  );
});

LinkBrokenBurstWide.displayName = 'LinkBrokenBurstWide';

export default LinkBrokenBurstWide;
export { LinkBrokenBurstWide };

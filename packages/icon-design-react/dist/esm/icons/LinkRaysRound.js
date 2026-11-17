import { createElement, forwardRef } from 'react';

const LinkRaysRound = forwardRef(function LinkRaysRound(
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
    createElement('path', {"d":"M13 11.762C14.207 12.566 15 13.941 15 15.5C15 17.984 12.984 20 10.5 20L6.5 20C4.016 20 2 17.984 2 15.5C2 13.188 3.754 11.301 6 11.051","key":"0"}),
    createElement('path', {"d":"M11 16.238C9.793 15.434 9 14.059 9 12.5C9 10.016 11.016 8 13.5 8L17.5 8C19.984 8 22 10.016 22 12.5C22 14.813 20.246 16.699 18 16.949","key":"1"}),
    createElement('path', {"d":"M11 3L11 5","key":"2"}),
    createElement('path', {"d":"M5.758 4.758L7.172 6.172","key":"3"})
  );
});

LinkRaysRound.displayName = 'LinkRaysRound';

export default LinkRaysRound;
export { LinkRaysRound };

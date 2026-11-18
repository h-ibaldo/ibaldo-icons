import { createElement, forwardRef } from 'react';

const LinkRound = forwardRef(function LinkRound(
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
    createElement('path', {"d":"M13 9.762C14.203 10.566 15 11.941 15 13.5C15 15.984 12.984 18 10.5 18L6.5 18C4.016 18 2 15.984 2 13.5C2 11.188 3.754 9.301 6 9.051","key":"0"}),
    createElement('path', {"d":"M11 14.238C9.797 13.434 9 12.059 9 10.5C9 8.016 11.016 6 13.5 6L17.5 6C19.984 6 22 8.016 22 10.5C22 12.813 20.246 14.699 18 14.949","key":"1"})
  );
});

LinkRound.displayName = 'LinkRound';

export default LinkRound;
export { LinkRound };

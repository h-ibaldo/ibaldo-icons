import { createElement, forwardRef } from 'react';

const LinkXFlat = forwardRef(function LinkXFlat(
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
    createElement('path', {"d":"M6.5 4C4.016 4 2 6.016 2 8.5C2 10.984 4.016 13 6.5 13L10.5 13C12.984 13 15 10.984 15 8.5C15 8.328 14.973 8.164 14.949 8","key":"0"}),
    createElement('path', {"d":"M17.5 13C19.984 13 22 10.984 22 8.5C22 6.016 19.984 4 17.5 4L13.5 4C11.016 4 9 6.016 9 8.5C9 8.672 9.027 8.836 9.051 9","key":"1"}),
    createElement('path', {"d":"M18 21L22 17","key":"2"}),
    createElement('path', {"d":"M18 17L22 21","key":"3"})
  );
});

LinkXFlat.displayName = 'LinkXFlat';

export default LinkXFlat;
export { LinkXFlat };

import { createElement, forwardRef } from 'react';

const LinkBrokenDoubleBracket = forwardRef(function LinkBrokenDoubleBracket(
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
    createElement('path', {"d":"M9 16L6 16C3.789 16 2 14.211 2 12C2 9.789 3.789 8 6 8L9 8","key":"0"}),
    createElement('path', {"d":"M15 16L18 16C20.211 16 22 14.211 22 12C22 9.789 20.211 8 18 8L15 8","key":"1"}),
    createElement('path', {"d":"M8 2L9 4","key":"2"}),
    createElement('path', {"d":"M16 2L15 4","key":"3"}),
    createElement('path', {"d":"M8 22L9 20","key":"4"}),
    createElement('path', {"d":"M16 22L15 20","key":"5"})
  );
});

LinkBrokenDoubleBracket.displayName = 'LinkBrokenDoubleBracket';

export default LinkBrokenDoubleBracket;
export { LinkBrokenDoubleBracket };

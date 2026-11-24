import { createElement, forwardRef } from 'react';

const LinkBrokenDoubleBracketLarge = forwardRef(function LinkBrokenDoubleBracketLarge(
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
    createElement('path', {"d":"M9 17L7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7L9 7","key":"0"}),
    createElement('path', {"d":"M15 7L17 7C19.762 7 22 9.238 22 12C22 14.762 19.762 17 17 17L15 17","key":"1"}),
    createElement('path', {"d":"M9 2L10 4","key":"2"}),
    createElement('path', {"d":"M15 2L14 4","key":"3"}),
    createElement('path', {"d":"M9 22L10 20","key":"4"}),
    createElement('path', {"d":"M15 22L14 20","key":"5"})
  );
});

LinkBrokenDoubleBracketLarge.displayName = 'LinkBrokenDoubleBracketLarge';

export default LinkBrokenDoubleBracketLarge;
export { LinkBrokenDoubleBracketLarge };

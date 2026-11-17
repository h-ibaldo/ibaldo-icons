import { createElement, forwardRef } from 'react';

const LinkPlusBracket = forwardRef(function LinkPlusBracket(
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
    createElement('path', {"d":"M9 12L7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2","key":"0"}),
    createElement('path', {"d":"M15 2L17 2C19.762 2 22 4.238 22 7C22 9.762 19.762 12 17 12L15 12","key":"1"}),
    createElement('path', {"d":"M8 7L16 7","key":"2"}),
    createElement('path', {"d":"M19 16L19 22","key":"3"}),
    createElement('path', {"d":"M22 19L16 19","key":"4"})
  );
});

LinkPlusBracket.displayName = 'LinkPlusBracket';

export default LinkPlusBracket;
export { LinkPlusBracket };

import { createElement, forwardRef } from 'react';

const BanknoteStack = forwardRef(function BanknoteStack(
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
    createElement('path', {"d":"M2 17L19 17L19 4L2 4Z","key":"0"}),
    createElement('path', {"d":"M22 7L22 20L5 20","key":"1"}),
    createElement('path', {"d":"M2 8C4.211 8 6 6.211 6 4","key":"2"}),
    createElement('path', {"d":"M15 4C15 6.211 16.789 8 19 8","key":"3"}),
    createElement('path', {"d":"M19 13C16.789 13 15 14.789 15 17","key":"4"}),
    createElement('path', {"d":"M6 17C6 14.789 4.211 13 2 13","key":"5"}),
    createElement('path', {"d":"M13 10.5C13 11.883 11.883 13 10.5 13C9.117 13 8 11.883 8 10.5C8 9.117 9.117 8 10.5 8C11.883 8 13 9.117 13 10.5Z","key":"6"})
  );
});

BanknoteStack.displayName = 'BanknoteStack';

export default BanknoteStack;
export { BanknoteStack };

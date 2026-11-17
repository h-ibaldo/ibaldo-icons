import { createElement, forwardRef } from 'react';

const Code = forwardRef(function Code(
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
    createElement('path', {"d":"M6 8L2 12L6 16","key":"0"}),
    createElement('path', {"d":"M18 8L22 12L18 16","key":"1"}),
    createElement('path', {"d":"M14 5L10 19","key":"2"})
  );
});

Code.displayName = 'Code';

export default Code;
export { Code };

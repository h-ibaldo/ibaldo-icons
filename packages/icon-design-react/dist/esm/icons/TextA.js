import { createElement, forwardRef } from 'react';

const TextA = forwardRef(function TextA(
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
    createElement('path', {"d":"M3 22L12 2L21 22","key":"0"}),
    createElement('path', {"d":"M6.148 15L17.852 15","key":"1"})
  );
});

TextA.displayName = 'TextA';

export default TextA;
export { TextA };

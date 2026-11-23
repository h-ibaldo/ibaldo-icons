import { createElement, forwardRef } from 'react';

const TextL = forwardRef(function TextL(
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
    createElement('path', {"d":"M6 2.023L6 22","key":"0"}),
    createElement('path', {"d":"M17.977 22L6 22","key":"1"})
  );
});

TextL.displayName = 'TextL';

export default TextL;
export { TextL };

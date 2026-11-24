import { createElement, forwardRef } from 'react';

const TextK = forwardRef(function TextK(
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
    createElement('path', {"d":"M18 2.023L6 14","key":"1"}),
    createElement('path', {"d":"M19 22L10 10","key":"2"})
  );
});

TextK.displayName = 'TextK';

export default TextK;
export { TextK };

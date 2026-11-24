import { createElement, forwardRef } from 'react';

const TextU = forwardRef(function TextU(
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
    createElement('path', {"d":"M5 2L5 15C5 18.867 8.133 22 12 22C15.867 22 19 18.867 19 15L19 2","key":"0"})
  );
});

TextU.displayName = 'TextU';

export default TextU;
export { TextU };

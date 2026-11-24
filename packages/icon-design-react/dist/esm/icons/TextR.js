import { createElement, forwardRef } from 'react';

const TextR = forwardRef(function TextR(
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
    createElement('path', {"d":"M6 22L6 2L13 2C15.762 2 18 4.238 18 7C18 9.762 15.762 12 13 12L6 12","key":"0"}),
    createElement('path', {"d":"M12 12L19 22","key":"1"})
  );
});

TextR.displayName = 'TextR';

export default TextR;
export { TextR };

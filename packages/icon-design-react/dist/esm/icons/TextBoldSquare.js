import { createElement, forwardRef } from 'react';

const TextBoldSquare = forwardRef(function TextBoldSquare(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M9 12L13.5 12C14.883 12 16 13.117 16 14.5C16 15.883 14.883 17 13.5 17L9 17","key":"1"}),
    createElement('path', {"d":"M9 17L9 7L12.5 7C13.883 7 15 8.117 15 9.5C15 10.883 13.883 12 12.5 12","key":"2"})
  );
});

TextBoldSquare.displayName = 'TextBoldSquare';

export default TextBoldSquare;
export { TextBoldSquare };

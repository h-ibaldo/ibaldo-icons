import { createElement, forwardRef } from 'react';

const TextAdSquare = forwardRef(function TextAdSquare(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M6 16L8 8L9.125 8L11 16","key":"1"}),
    createElement('path', {"d":"M16 8L14 8L14 16L16 16C17.105 16 18 15.105 18 14L18 10C18 8.895 17.105 8 16 8Z","key":"2"}),
    createElement('path', {"d":"M7 15L10 15","key":"3"})
  );
});

TextAdSquare.displayName = 'TextAdSquare';

export default TextAdSquare;
export { TextAdSquare };

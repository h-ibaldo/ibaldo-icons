import { createElement, forwardRef } from 'react';

const CodeSquare = forwardRef(function CodeSquare(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M13 8L11 16","key":"1"}),
    createElement('path', {"d":"M16 10L18 12L16 14","key":"2"}),
    createElement('path', {"d":"M8 10L6 12L8 14","key":"3"})
  );
});

CodeSquare.displayName = 'CodeSquare';

export default CodeSquare;
export { CodeSquare };

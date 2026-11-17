import { createElement, forwardRef } from 'react';

const RecordSquare = forwardRef(function RecordSquare(
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
    createElement('path', {"d":"M17 12C17 9.238 14.762 7 12 7C9.238 7 7 9.238 7 12C7 14.762 9.238 17 12 17C14.762 17 17 14.762 17 12Z","key":"0"}),
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"1"})
  );
});

RecordSquare.displayName = 'RecordSquare';

export default RecordSquare;
export { RecordSquare };

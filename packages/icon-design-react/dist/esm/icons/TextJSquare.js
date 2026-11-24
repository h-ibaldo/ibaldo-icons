import { createElement, forwardRef } from 'react';

const TextJSquare = forwardRef(function TextJSquare(
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
    createElement('path', {"d":"M15 7L15 13.965C15 15.641 13.641 17 11.965 17C10.289 17 8.93 15.641 8.93 13.965","key":"0"}),
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"1"})
  );
});

TextJSquare.displayName = 'TextJSquare';

export default TextJSquare;
export { TextJSquare };

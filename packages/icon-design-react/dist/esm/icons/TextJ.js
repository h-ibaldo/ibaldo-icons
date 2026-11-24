import { createElement, forwardRef } from 'react';

const TextJ = forwardRef(function TextJ(
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
    createElement('path', {"d":"M18 2.023L18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16L6 15","key":"0"})
  );
});

TextJ.displayName = 'TextJ';

export default TextJ;
export { TextJ };

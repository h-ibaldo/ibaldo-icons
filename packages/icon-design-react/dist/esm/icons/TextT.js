import { createElement, forwardRef } from 'react';

const TextT = forwardRef(function TextT(
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
    createElement('path', {"d":"M4 2L20 2","key":"0"}),
    createElement('path', {"d":"M12 22L12 2","key":"1"})
  );
});

TextT.displayName = 'TextT';

export default TextT;
export { TextT };

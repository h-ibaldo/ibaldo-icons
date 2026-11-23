import { createElement, forwardRef } from 'react';

const TextM = forwardRef(function TextM(
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
    createElement('path', {"d":"M3 22L3 2L12 21L21 2L21 22.023","key":"0"})
  );
});

TextM.displayName = 'TextM';

export default TextM;
export { TextM };

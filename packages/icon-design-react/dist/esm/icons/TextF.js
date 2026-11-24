import { createElement, forwardRef } from 'react';

const TextF = forwardRef(function TextF(
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
    createElement('path', {"d":"M5 22.023L5 2L18.039 2","key":"0"}),
    createElement('path', {"d":"M6 13L16 13","key":"1"})
  );
});

TextF.displayName = 'TextF';

export default TextF;
export { TextF };

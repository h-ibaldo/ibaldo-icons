import { createElement, forwardRef } from 'react';

const TextQuote = forwardRef(function TextQuote(
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
    createElement('path', {"d":"M2 5L22.027 5","key":"0"}),
    createElement('path', {"d":"M8 12L22.027 12","key":"1"}),
    createElement('path', {"d":"M2 12L2 19","key":"2"}),
    createElement('path', {"d":"M8 19L22.027 19","key":"3"})
  );
});

TextQuote.displayName = 'TextQuote';

export default TextQuote;
export { TextQuote };

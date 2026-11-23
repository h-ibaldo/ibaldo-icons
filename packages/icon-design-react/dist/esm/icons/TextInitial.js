import { createElement, forwardRef } from 'react';

const TextInitial = forwardRef(function TextInitial(
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
    createElement('path', {"d":"M2 19L22.027 19","key":"0"}),
    createElement('path', {"d":"M14 12L22.027 12","key":"1"}),
    createElement('path', {"d":"M14 5L22.027 5","key":"2"}),
    createElement('path', {"d":"M2 12L4.605 5.918C4.844 5.363 5.395 5 6 5C6.605 5 7.156 5.363 7.395 5.918L10 12","key":"3"}),
    createElement('path', {"d":"M3 10L9 10","key":"4"})
  );
});

TextInitial.displayName = 'TextInitial';

export default TextInitial;
export { TextInitial };

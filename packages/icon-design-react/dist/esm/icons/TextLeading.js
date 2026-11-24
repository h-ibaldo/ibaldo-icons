import { createElement, forwardRef } from 'react';

const TextLeading = forwardRef(function TextLeading(
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
    createElement('path', {"d":"M7 16L12 7L17 16","key":"0"}),
    createElement('path', {"d":"M8.668 13L15.332 13","key":"1"}),
    createElement('path', {"d":"M22 22L2 22","key":"2"}),
    createElement('path', {"d":"M22 2L2 2","key":"3"})
  );
});

TextLeading.displayName = 'TextLeading';

export default TextLeading;
export { TextLeading };

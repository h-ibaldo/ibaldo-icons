import { createElement, forwardRef } from 'react';

const TextAlignCenter = forwardRef(function TextAlignCenter(
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
    createElement('path', {"d":"M5 6L19 6","key":"0"}),
    createElement('path', {"d":"M7 10L17 10","key":"1"}),
    createElement('path', {"d":"M5 14L19 14","key":"2"}),
    createElement('path', {"d":"M8 18L16 18","key":"3"})
  );
});

TextAlignCenter.displayName = 'TextAlignCenter';

export default TextAlignCenter;
export { TextAlignCenter };

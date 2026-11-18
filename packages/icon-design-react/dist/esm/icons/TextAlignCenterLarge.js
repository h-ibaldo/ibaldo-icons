import { createElement, forwardRef } from 'react';

const TextAlignCenterLarge = forwardRef(function TextAlignCenterLarge(
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
    createElement('path', {"d":"M4 5L20 5","key":"0"}),
    createElement('path', {"d":"M6 10L18 10","key":"1"}),
    createElement('path', {"d":"M4 15L20 15","key":"2"}),
    createElement('path', {"d":"M7 20L17 20","key":"3"})
  );
});

TextAlignCenterLarge.displayName = 'TextAlignCenterLarge';

export default TextAlignCenterLarge;
export { TextAlignCenterLarge };

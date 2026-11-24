import { createElement, forwardRef } from 'react';

const TextAlignRight = forwardRef(function TextAlignRight(
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
    createElement('path', {"d":"M19 6L5 6","key":"0"}),
    createElement('path', {"d":"M19 10L9 10","key":"1"}),
    createElement('path', {"d":"M19 14L5 14","key":"2"}),
    createElement('path', {"d":"M19 18L12 18","key":"3"})
  );
});

TextAlignRight.displayName = 'TextAlignRight';

export default TextAlignRight;
export { TextAlignRight };

import { createElement, forwardRef } from 'react';

const TextBold = forwardRef(function TextBold(
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
    createElement('path', {"d":"M6 11L14.5 11C16.984 11 19 13.016 19 15.5C19 17.984 16.984 20 14.5 20L6 20L6 4L13.5 4C15.434 4 17 5.566 17 7.5C17 9.434 15.434 11 13.5 11","key":"0"})
  );
});

TextBold.displayName = 'TextBold';

export default TextBold;
export { TextBold };

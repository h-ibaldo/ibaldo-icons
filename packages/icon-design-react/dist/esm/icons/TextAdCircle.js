import { createElement, forwardRef } from 'react';

const TextAdCircle = forwardRef(function TextAdCircle(
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
    createElement('path', {"d":"M6 15L8 9L9 9L11 15","key":"0"}),
    createElement('path', {"d":"M16 9L14 9L14 15L16 15C17.105 15 18 14.105 18 13L18 11C18 9.895 17.105 9 16 9Z","key":"1"}),
    createElement('path', {"d":"M7 14L10 14","key":"2"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"3"})
  );
});

TextAdCircle.displayName = 'TextAdCircle';

export default TextAdCircle;
export { TextAdCircle };

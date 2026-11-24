import { createElement, forwardRef } from 'react';

const TextG = forwardRef(function TextG(
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
    createElement('path', {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22","key":"0"}),
    createElement('path', {"d":"M12 2C14.617 2 16.684 3.094 18.063 5","key":"1"}),
    createElement('path', {"d":"M12 22C16.375 22 19 18.398 19 13L11.93 13","key":"2"})
  );
});

TextG.displayName = 'TextG';

export default TextG;
export { TextG };

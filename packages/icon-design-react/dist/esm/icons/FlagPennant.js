import { createElement, forwardRef } from 'react';

const FlagPennant = forwardRef(function FlagPennant(
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
    createElement('path', {"d":"M6 22L6 1.969L19.883 8.086L5.977 14.102","key":"0"})
  );
});

FlagPennant.displayName = 'FlagPennant';

export default FlagPennant;
export { FlagPennant };

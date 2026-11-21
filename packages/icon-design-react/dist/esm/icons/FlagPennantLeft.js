import { createElement, forwardRef } from 'react';

const FlagPennantLeft = forwardRef(function FlagPennantLeft(
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
    createElement('path', {"d":"M17.855 22L17.855 1.969L3.977 8.086L17.883 14.102","key":"0"})
  );
});

FlagPennantLeft.displayName = 'FlagPennantLeft';

export default FlagPennantLeft;
export { FlagPennantLeft };

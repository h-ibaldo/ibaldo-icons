import { createElement, forwardRef } from 'react';

const BetweenHorizontalStart = forwardRef(function BetweenHorizontalStart(
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
    createElement('path', {"d":"M3 8L7.242 12.242L3 16.484","key":"0"}),
    createElement('path', {"d":"M11 2L21 2L21 10L11 10Z","key":"1"}),
    createElement('path', {"d":"M11 14L21 14L21 22L11 22Z","key":"2"})
  );
});

BetweenHorizontalStart.displayName = 'BetweenHorizontalStart';

export default BetweenHorizontalStart;
export { BetweenHorizontalStart };

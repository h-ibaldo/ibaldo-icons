import { createElement, forwardRef } from 'react';

const SeparatorHorizontalIn = forwardRef(function SeparatorHorizontalIn(
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
    createElement('path', {"d":"M2 12L22 12","key":"0"}),
    createElement('path', {"d":"M17.637 22L12.316 17L7 22","key":"1"}),
    createElement('path', {"d":"M7 2L12.316 6.859L17.637 2","key":"2"})
  );
});

SeparatorHorizontalIn.displayName = 'SeparatorHorizontalIn';

export default SeparatorHorizontalIn;
export { SeparatorHorizontalIn };

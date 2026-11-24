import { createElement, forwardRef } from 'react';

const SeparatorHorizontal = forwardRef(function SeparatorHorizontal(
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
    createElement('path', {"d":"M7 17L12.316 22L17.637 17","key":"1"}),
    createElement('path', {"d":"M17.637 6.859L12.316 2L7 6.859","key":"2"})
  );
});

SeparatorHorizontal.displayName = 'SeparatorHorizontal';

export default SeparatorHorizontal;
export { SeparatorHorizontal };

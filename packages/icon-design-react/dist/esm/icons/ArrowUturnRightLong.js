import { createElement, forwardRef } from 'react';

const ArrowUturnRightLong = forwardRef(function ArrowUturnRightLong(
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
    createElement('path', {"d":"M17 12L21 8L17 4","key":"0"}),
    createElement('path', {"d":"M21 8L9 8C5.688 8 3 10.688 3 14C3 17.313 5.688 20 9 20L20 20","key":"1"})
  );
});

ArrowUturnRightLong.displayName = 'ArrowUturnRightLong';

export default ArrowUturnRightLong;
export { ArrowUturnRightLong };

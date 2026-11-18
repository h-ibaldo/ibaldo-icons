import { createElement, forwardRef } from 'react';

const PointerShineLarge = forwardRef(function PointerShineLarge(
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
    createElement('path', {"d":"M9.23 8.051L21.363 12.094C22.117 12.348 22.23 13.367 21.547 13.777L16.691 16.691L13.777 21.547C13.367 22.23 12.344 22.117 12.094 21.363L8.051 9.23C7.805 8.5 8.5 7.809 9.23 8.051Z","key":"0"}),
    createElement('path', {"d":"M9 2L9 3","key":"1"}),
    createElement('path', {"d":"M2 9L3 9","key":"2"}),
    createElement('path', {"d":"M4.051 4.051L4.758 4.758","key":"3"}),
    createElement('path', {"d":"M4.051 13.949L4.758 13.242","key":"4"}),
    createElement('path', {"d":"M13.242 4.758L13.949 4.051","key":"5"})
  );
});

PointerShineLarge.displayName = 'PointerShineLarge';

export default PointerShineLarge;
export { PointerShineLarge };

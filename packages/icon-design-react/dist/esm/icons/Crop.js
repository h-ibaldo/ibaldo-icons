import { createElement, forwardRef } from 'react';

const Crop = forwardRef(function Crop(
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
    createElement('path', {"d":"M6 2L6 16C6 17.105 6.895 18 8 18L22 18","key":"0"}),
    createElement('path', {"d":"M18 14L18 8C18 6.895 17.105 6 16 6L10 6","key":"1"}),
    createElement('path', {"d":"M6 6L2 6","key":"2"}),
    createElement('path', {"d":"M18 22L18 18","key":"3"})
  );
});

Crop.displayName = 'Crop';

export default Crop;
export { Crop };

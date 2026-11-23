import { createElement, forwardRef } from 'react';

const PaintBucket = forwardRef(function PaintBucket(
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
    createElement('path', {"d":"M9 2L18 11","key":"0"}),
    createElement('path', {"d":"M4 12C8 8 11 13 16 9","key":"1"}),
    createElement('path', {"d":"M19 14L16.668 16.914C15.719 18.102 15.813 19.813 16.891 20.891C18.055 22.055 19.945 22.055 21.109 20.891C22.188 19.813 22.281 18.102 21.332 16.914Z","key":"2"}),
    createElement('path', {"d":"M17.5 10.5L11.414 16.586C10.633 17.367 9.367 17.367 8.586 16.586L3.414 11.414C2.633 10.633 2.633 9.367 3.414 8.586L9.5 2.5","key":"3"}),
    createElement('path', {"d":"M9 7L3 3","key":"4"})
  );
});

PaintBucket.displayName = 'PaintBucket';

export default PaintBucket;
export { PaintBucket };

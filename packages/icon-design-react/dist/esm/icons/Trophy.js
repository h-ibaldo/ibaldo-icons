import { createElement, forwardRef } from 'react';

const Trophy = forwardRef(function Trophy(
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
    createElement('path', {"d":"M12 17C8.688 17 6 14.313 6 11L6 2L18 2L18 11C18 14.313 15.313 17 12 17Z","key":"0"}),
    createElement('path', {"d":"M18 11L18.5 11C20.434 11 22 9.434 22 7.5C22 5.566 20.434 4 18.5 4L18 4","key":"1"}),
    createElement('path', {"d":"M6 11L5.5 11C3.566 11 2 9.434 2 7.5C2 5.566 3.566 4 5.5 4L6 4","key":"2"}),
    createElement('path', {"d":"M8 22L16 22","key":"3"}),
    createElement('path', {"d":"M12 17L12 22","key":"4"})
  );
});

Trophy.displayName = 'Trophy';

export default Trophy;
export { Trophy };

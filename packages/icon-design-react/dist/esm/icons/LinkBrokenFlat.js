import { createElement, forwardRef } from 'react';

const LinkBrokenFlat = forwardRef(function LinkBrokenFlat(
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
    createElement('path', {"d":"M15.352 9.219L20.117 11.969C21.789 12.938 22.363 15.074 21.398 16.75C20.43 18.422 18.289 18.996 16.617 18.031L11.852 15.281","key":"0"}),
    createElement('path', {"d":"M11 19L5.5 19C3.566 19 2 17.434 2 15.5C2 13.566 3.566 12 5.5 12L11 12","key":"1"}),
    createElement('path', {"d":"M14 3L12 6","key":"2"}),
    createElement('path', {"d":"M6 5L8 7","key":"3"})
  );
});

LinkBrokenFlat.displayName = 'LinkBrokenFlat';

export default LinkBrokenFlat;
export { LinkBrokenFlat };

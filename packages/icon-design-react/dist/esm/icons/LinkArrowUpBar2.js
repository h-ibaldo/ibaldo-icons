import { createElement, forwardRef } from 'react';

const LinkArrowUpBar2 = forwardRef(function LinkArrowUpBar2(
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
    createElement('path', {"d":"M3.035 6.035C4.418 4.656 6.656 4.656 8.035 6.035L9.5 7.5C10.883 8.883 10.883 11.121 9.5 12.5C8.121 13.883 5.883 13.883 4.5 12.5L3.035 11.035C1.656 9.656 1.656 7.418 3.035 6.035Z","key":"0"}),
    createElement('path', {"d":"M17.965 20.965C16.582 22.344 14.344 22.344 12.965 20.965L11.5 19.5C10.117 18.117 10.117 15.879 11.5 14.5C12.879 13.117 15.117 13.117 16.5 14.5L17.965 15.965C19.344 17.344 19.344 19.582 17.965 20.965Z","key":"1"}),
    createElement('path', {"d":"M14 17L7 10","key":"2"}),
    createElement('path', {"d":"M22 5L19 2L16 5","key":"3"}),
    createElement('path', {"d":"M19 10L19 2","key":"4"})
  );
});

LinkArrowUpBar2.displayName = 'LinkArrowUpBar2';

export default LinkArrowUpBar2;
export { LinkArrowUpBar2 };

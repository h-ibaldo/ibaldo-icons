import { createElement, forwardRef } from 'react';

const IdCardClip = forwardRef(function IdCardClip(
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
    createElement('path', {"d":"M5 19C5 17.344 6.344 16 8 16L9 16C10.656 16 12 17.344 12 19","key":"0"}),
    createElement('path', {"d":"M6 13.5C6 12.121 7.121 11 8.5 11C9.879 11 11 12.121 11 13.5C11 14.879 9.879 16 8.5 16C7.121 16 6 14.879 6 13.5Z","key":"1"}),
    createElement('path', {"d":"M15 12L18 12","key":"2"}),
    createElement('path', {"d":"M15 15L18 15","key":"3"}),
    createElement('path', {"d":"M15 18L18 18","key":"4"}),
    createElement('path', {"d":"M13 5L20 5C21.105 5 22 5.895 22 7L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 7C2 5.895 2.895 5 4 5L9.5 5","key":"5"}),
    createElement('path', {"d":"M10 8L14 8","key":"6"}),
    createElement('path', {"d":"M7.004 1.996L12 8","key":"7"}),
    createElement('path', {"d":"M14 5L17 2","key":"8"})
  );
});

IdCardClip.displayName = 'IdCardClip';

export default IdCardClip;
export { IdCardClip };

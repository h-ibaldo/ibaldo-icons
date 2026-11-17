import { createElement, forwardRef } from 'react';

const ChecklistUserSmall = forwardRef(function ChecklistUserSmall(
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
    createElement('path', {"d":"M20 15C20 16.656 18.656 18 17 18C15.344 18 14 16.656 14 15C14 13.344 15.344 12 17 12C18.656 12 20 13.344 20 15Z","key":"0"}),
    createElement('path', {"d":"M22 22L22 20C22 18.895 21.105 18 20 18L14 18C12.895 18 12 18.895 12 20L12 22","key":"1"}),
    createElement('path', {"d":"M8 4L14 4","key":"2"}),
    createElement('path', {"d":"M8 9L14 9","key":"3"}),
    createElement('path', {"d":"M5 3L3 5L2 4","key":"4"}),
    createElement('path', {"d":"M5 8L3 10L2 9","key":"5"}),
    createElement('path', {"d":"M5 13L3 15L2 14","key":"6"}),
    createElement('path', {"d":"M8 14L10 14","key":"7"})
  );
});

ChecklistUserSmall.displayName = 'ChecklistUserSmall';

export default ChecklistUserSmall;
export { ChecklistUserSmall };

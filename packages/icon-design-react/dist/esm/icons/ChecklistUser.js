import { createElement, forwardRef } from 'react';

const ChecklistUser = forwardRef(function ChecklistUser(
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
    createElement('path', {"d":"M20 14.965C20 16.625 18.656 17.965 17 17.965C15.344 17.965 14 16.625 14 14.965C14 13.309 15.344 11.965 17 11.965C18.656 11.965 20 13.309 20 14.965Z","key":"0"}),
    createElement('path', {"d":"M22 21.965C22 19.758 20.211 17.965 18 17.965L16 17.965C13.789 17.965 12 19.758 12 21.965","key":"1"}),
    createElement('path', {"d":"M8 3.965L14 3.965","key":"2"}),
    createElement('path', {"d":"M8 8.965L14 8.965","key":"3"}),
    createElement('path', {"d":"M8 13.965L10 13.965","key":"4"}),
    createElement('path', {"d":"M5 2.965L3 4.965L2 3.965","key":"5"}),
    createElement('path', {"d":"M5 7.965L3 9.965L2 8.965","key":"6"}),
    createElement('path', {"d":"M5 12.965L3 14.965L2 13.965","key":"7"})
  );
});

ChecklistUser.displayName = 'ChecklistUser';

export default ChecklistUser;
export { ChecklistUser };

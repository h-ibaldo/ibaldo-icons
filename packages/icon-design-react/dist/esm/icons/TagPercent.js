import { createElement, forwardRef } from 'react';

const TagPercent = forwardRef(function TagPercent(
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
    createElement('path', {"d":"M20.066 19L8.023 19C7.418 19 6.848 18.727 6.469 18.254L2.441 13.254C1.852 12.523 1.852 11.477 2.441 10.746L6.469 5.746C6.848 5.273 7.418 5 8.023 5L20.066 5C21.172 5 22.066 5.895 22.066 7L22.066 17C22.066 18.105 21.172 19 20.066 19Z","key":"0"}),
    createElement('path', {"d":"M13.066 9L13.066 9","key":"1"}),
    createElement('path', {"d":"M18.066 15L18.066 15","key":"2"}),
    createElement('path', {"d":"M13.066 15L18.066 9","key":"3"}),
    createElement('path', {"d":"M7.066 13C6.516 13 6.066 12.551 6.066 12C6.066 11.449 6.516 11 7.066 11C7.617 11 8.066 11.449 8.066 12C8.066 12.551 7.617 13 7.066 13Z","key":"4"})
  );
});

TagPercent.displayName = 'TagPercent';

export default TagPercent;
export { TagPercent };

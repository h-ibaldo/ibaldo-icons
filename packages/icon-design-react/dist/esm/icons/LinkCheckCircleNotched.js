import { createElement, forwardRef } from 'react';

const LinkCheckCircleNotched = forwardRef(function LinkCheckCircleNotched(
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
    createElement('path', {"d":"M7 14L14 7","key":"0"}),
    createElement('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z","key":"1"}),
    createElement('path', {"d":"M17 9L17.965 8.035C19.344 6.652 19.344 4.414 17.965 3.035C16.586 1.652 14.344 1.652 12.965 3.035L11.5 4.5C10.117 5.883 10.117 8.117 11.5 9.5","key":"2"}),
    createElement('path', {"d":"M9.5 11.5C8.117 10.117 5.883 10.117 4.5 11.5L3.035 12.965C1.656 14.344 1.656 16.586 3.035 17.965C4.414 19.344 6.656 19.344 8.035 17.965L9 17","key":"3"}),
    createElement('path', {"d":"M15.5 17.02L16.5 18.02L18.5 16.02","key":"4"})
  );
});

LinkCheckCircleNotched.displayName = 'LinkCheckCircleNotched';

export default LinkCheckCircleNotched;
export { LinkCheckCircleNotched };

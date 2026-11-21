import { createElement, forwardRef } from 'react';

const BadgePercentBumpy = forwardRef(function BadgePercentBumpy(
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
    createElement('path', {"d":"M9 15L15 9","key":"0"}),
    createElement('path', {"d":"M9 9.5C9 9.223 9.223 9 9.5 9C9.777 9 10 9.223 10 9.5C10 9.777 9.777 10 9.5 10C9.223 10 9 9.777 9 9.5Z","key":"1"}),
    createElement('path', {"d":"M14 14.5C14 14.223 14.223 14 14.5 14C14.777 14 15 14.223 15 14.5C15 14.777 14.777 15 14.5 15C14.223 15 14 14.777 14 14.5Z","key":"2"}),
    createElement('path', {"d":"M9.879 3.121C11.051 1.949 12.949 1.949 14.121 3.121L15.223 4.223L16.777 4.223C18.434 4.223 19.777 5.566 19.777 7.223L19.777 8.777L20.879 9.879C22.051 11.051 22.051 12.949 20.879 14.121L19.777 15.223L19.777 16.777C19.777 18.434 18.434 19.777 16.777 19.777L15.223 19.777L14.121 20.879C12.949 22.051 11.051 22.051 9.879 20.879L8.777 19.777L7.223 19.777C5.566 19.777 4.223 18.434 4.223 16.777L4.223 15.223L3.121 14.121C1.949 12.949 1.949 11.051 3.121 9.879L4.223 8.777L4.223 7.223C4.223 5.566 5.566 4.223 7.223 4.223L8.777 4.223Z","key":"3"})
  );
});

BadgePercentBumpy.displayName = 'BadgePercentBumpy';

export default BadgePercentBumpy;
export { BadgePercentBumpy };

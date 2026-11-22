import { createElement, forwardRef } from 'react';

const HeartBrokenAngular = forwardRef(function HeartBrokenAngular(
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
    createElement('path', {"d":"M20.449 5.449C18.516 3.516 15.383 3.516 13.449 5.449L11.949 6.949L10.449 5.449C8.516 3.516 5.383 3.516 3.449 5.449C1.516 7.383 1.516 10.516 3.449 12.449L11.949 20.949L20.449 12.449C22.383 10.516 22.383 7.383 20.449 5.449Z","key":"0"}),
    createElement('path', {"d":"M11.949 6.949L10 10L15 11L12 15","key":"1"})
  );
});

HeartBrokenAngular.displayName = 'HeartBrokenAngular';

export default HeartBrokenAngular;
export { HeartBrokenAngular };

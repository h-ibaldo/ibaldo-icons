import { createElement, forwardRef } from 'react';

const Sun = forwardRef(function Sun(
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
    createElement('polygon', {"points":"19 14.899536132808862 21.899536132808862 11.999999999998181 19 9.1004638671875 19 4.999999999998181 14.899536132808862 4.999999999998181 12 2.1004638671875 9.100463867191138 4.999999999998181 5 4.999999999998181 5 9.100524902338293 2.1005859375 11.999999999998181 5 14.899475097658069 5 18.999999999998181 9.1005859375 18.999999999998181 12 21.899475097658069 14.8994140625 18.999999999998181 19 18.999999999998181 19 14.899536132808862","key":"0"}),
    createElement('circle', {"cx":"12","cy":"11.999999999998181","r":"4","key":"1"})
  );
});

Sun.displayName = 'Sun';

export default Sun;
export { Sun };

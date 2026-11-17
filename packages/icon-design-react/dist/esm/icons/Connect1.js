import { createElement, forwardRef } from 'react';

const Connect1 = forwardRef(function Connect1(
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
    createElement('circle', {"cx":"4","cy":"11.999999999998181","r":"2","key":"0"}),
    createElement('line', {"x1":"6","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181","key":"1"}),
    createElement('circle', {"cx":"20","cy":"3.999999999998181","r":"2","key":"2"}),
    createElement('circle', {"cx":"20","cy":"19.999999999998181","r":"2","key":"3"}),
    createElement('polyline', {"points":"18.6884765625 5.498901367188409 13 11.999999999998181 18.6884765625 18.501098632808862","key":"4"})
  );
});

Connect1.displayName = 'Connect1';

export default Connect1;
export { Connect1 };

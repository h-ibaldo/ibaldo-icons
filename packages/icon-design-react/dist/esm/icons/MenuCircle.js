import { createElement, forwardRef } from 'react';

const MenuCircle = forwardRef(function MenuCircle(
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
    createElement('line', {"x1":"8","y1":"12.000000078527592","x2":"16","y2":"12.000000078527592","key":"0"}),
    createElement('line', {"x1":"8","y1":"8.000000078527592","x2":"16","y2":"8.000000078527592","key":"1"}),
    createElement('line', {"x1":"8","y1":"16.000000078527592","x2":"16","y2":"16.000000078527592","key":"2"}),
    createElement('circle', {"cx":"11.999999999989996","cy":"12.000000078527592","r":"10","key":"3"})
  );
});

MenuCircle.displayName = 'MenuCircle';

export default MenuCircle;
export { MenuCircle };

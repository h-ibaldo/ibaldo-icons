import { createElement, forwardRef } from 'react';

const MenuThreeStripes6 = forwardRef(function MenuThreeStripes6(
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
    createElement('line', {"x1":"2","y1":"12.000000078527592","x2":"22","y2":"12.000000078527592","key":"0"}),
    createElement('line', {"x1":"2","y1":"7.000000078527592","x2":"22","y2":"7.000000078527592","key":"1"}),
    createElement('line', {"x1":"2","y1":"17.000000078527592","x2":"22","y2":"17.000000078527592","key":"2"})
  );
});

MenuThreeStripes6.displayName = 'MenuThreeStripes6';

export default MenuThreeStripes6;
export { MenuThreeStripes6 };

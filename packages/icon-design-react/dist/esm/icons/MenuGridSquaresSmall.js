import { createElement, forwardRef } from 'react';

const MenuGridSquaresSmall = forwardRef(function MenuGridSquaresSmall(
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
    createElement('rect', {"x":"4.000000004889444","y":"3.999999995256076","width":"2","height":"2","key":"0"}),
    createElement('rect', {"x":"11.000000004889444","y":"3.999999995256076","width":"2","height":"2","key":"1"}),
    createElement('rect', {"x":"18.000000004889444","y":"3.999999995256076","width":"2","height":"2","key":"2"}),
    createElement('rect', {"x":"4.000000004889444","y":"10.999999995256076","width":"2","height":"2","key":"3"}),
    createElement('rect', {"x":"11.000000004889444","y":"10.999999995256076","width":"2","height":"2","key":"4"}),
    createElement('rect', {"x":"18.000000004889444","y":"10.999999995256076","width":"2","height":"2","key":"5"}),
    createElement('rect', {"x":"4.000000004889444","y":"17.999999995256076","width":"2","height":"2","key":"6"}),
    createElement('rect', {"x":"11.000000004889444","y":"17.999999995256076","width":"2","height":"2","key":"7"}),
    createElement('rect', {"x":"18.000000004889444","y":"17.999999995256076","width":"2","height":"2","key":"8"})
  );
});

MenuGridSquaresSmall.displayName = 'MenuGridSquaresSmall';

export default MenuGridSquaresSmall;
export { MenuGridSquaresSmall };

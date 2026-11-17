import { createElement, forwardRef } from 'react';

const MenuHamburgerSquare = forwardRef(function MenuHamburgerSquare(
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
    createElement('line', {"x1":"7.000000004889444","y1":"7.999999995256076","x2":"17.000000004889444","y2":"7.999999995256076","key":"0"}),
    createElement('line', {"x1":"7.000000004889444","y1":"11.999999995256076","x2":"17.000000004889444","y2":"11.999999995256076","key":"1"}),
    createElement('line', {"x1":"7.000000004889444","y1":"15.999999995256076","x2":"17.000000004889444","y2":"15.999999995256076","key":"2"}),
    createElement('rect', {"x":"2.000000004889444","y":"1.999999995256076","width":"20","height":"20","rx":"5","ry":"5","key":"3"})
  );
});

MenuHamburgerSquare.displayName = 'MenuHamburgerSquare';

export default MenuHamburgerSquare;
export { MenuHamburgerSquare };

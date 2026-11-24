import { createElement, forwardRef } from 'react';

const MenuDashes = forwardRef(function MenuDashes(
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
    createElement('line', {"x1":"10","y1":"11.999999999998181","x2":"14","y2":"11.999999999998181","key":"0"}),
    createElement('line', {"x1":"10","y1":"2.999999999998181","x2":"14","y2":"2.999999999998181","key":"1"}),
    createElement('line', {"x1":"10","y1":"20.999999999998181","x2":"14","y2":"20.999999999998181","key":"2"})
  );
});

MenuDashes.displayName = 'MenuDashes';

export default MenuDashes;
export { MenuDashes };

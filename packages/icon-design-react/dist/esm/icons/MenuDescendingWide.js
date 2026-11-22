import { createElement, forwardRef } from 'react';

const MenuDescendingWide = forwardRef(function MenuDescendingWide(
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
    createElement('path', {"d":"M2 4L22 4","key":"0"}),
    createElement('path', {"d":"M2 12L15 12","key":"1"}),
    createElement('path', {"d":"M2 20L7 20","key":"2"})
  );
});

MenuDescendingWide.displayName = 'MenuDescendingWide';

export default MenuDescendingWide;
export { MenuDescendingWide };

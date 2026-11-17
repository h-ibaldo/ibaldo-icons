import { createElement, forwardRef } from 'react';

const MenuThreeStripesSquare = forwardRef(function MenuThreeStripesSquare(
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
    createElement('line', {"x1":"7","y1":"12.000000078527592","x2":"17","y2":"12.000000078527592","key":"0"}),
    createElement('line', {"x1":"7","y1":"7.000000078527592","x2":"17","y2":"7.000000078527592","key":"1"}),
    createElement('line', {"x1":"7","y1":"17.000000078527592","x2":"17","y2":"17.000000078527592","key":"2"}),
    createElement('rect', {"x":"2","y":"2.000000078527592","width":"20","height":"20","rx":"2","ry":"2","key":"3"})
  );
});

MenuThreeStripesSquare.displayName = 'MenuThreeStripesSquare';

export default MenuThreeStripesSquare;
export { MenuThreeStripesSquare };

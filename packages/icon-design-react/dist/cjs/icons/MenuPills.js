'use strict';

const { createElement, forwardRef } = require('react');

const MenuPills = forwardRef(function MenuPills(
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
    createElement('rect', {"x":"2","y":"2.000000076632091","width":"20","height":"3.999999993410484","rx":"1.999998018237277","ry":"1.999998018237277","key":"0"}),
    createElement('rect', {"x":"2","y":"10.000000075584353","width":"20","height":"3.999999995505959","rx":"1.999998032602977","ry":"1.999998032602977","key":"1"}),
    createElement('rect', {"x":"2","y":"18.000000081987196","width":"20","height":"3.999999982700274","rx":"1.999998009715652","ry":"1.999998009715652","key":"2"})
  );
});

MenuPills.displayName = 'MenuPills';

module.exports = MenuPills;
module.exports.MenuPills = MenuPills;
module.exports.default = MenuPills;

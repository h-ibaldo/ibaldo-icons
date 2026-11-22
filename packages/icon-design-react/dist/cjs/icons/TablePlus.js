'use strict';

const { createElement, forwardRef } = require('react');

const TablePlus = forwardRef(function TablePlus(
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
    createElement('path', {"d":"M12 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 12L12 12Z","key":"0"}),
    createElement('path', {"d":"M12 12L12 2","key":"1"}),
    createElement('path', {"d":"M19 22L19 16","key":"2"}),
    createElement('path', {"d":"M16 19L22 19","key":"3"}),
    createElement('path', {"d":"M2 12L12 12","key":"4"})
  );
});

TablePlus.displayName = 'TablePlus';

module.exports = TablePlus;
module.exports.TablePlus = TablePlus;
module.exports.default = TablePlus;

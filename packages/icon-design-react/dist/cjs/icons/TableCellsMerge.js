'use strict';

const { createElement, forwardRef } = require('react');

const TableCellsMerge = forwardRef(function TableCellsMerge(
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
    createElement('path', {"d":"M21 15L3 15","key":"0"}),
    createElement('path', {"d":"M21 9L3 9","key":"1"}),
    createElement('path', {"d":"M12 9L12 3","key":"2"}),
    createElement('path', {"d":"M12 21L12 15","key":"3"}),
    createElement('path', {"d":"M21 4.801L21 19.199C21 20.195 20.195 21 19.199 21L4.801 21C3.805 21 3 20.195 3 19.199L3 4.801C3 3.805 3.805 3 4.801 3L19.199 3C20.195 3 21 3.805 21 4.801Z","key":"4"})
  );
});

TableCellsMerge.displayName = 'TableCellsMerge';

module.exports = TableCellsMerge;
module.exports.TableCellsMerge = TableCellsMerge;
module.exports.default = TableCellsMerge;

'use strict';

const { createElement, forwardRef } = require('react');

const ListTree = forwardRef(function ListTree(
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
    createElement('path', {"d":"M6 4L22 4","key":"0"}),
    createElement('path', {"d":"M12 12L22 12","key":"1"}),
    createElement('path', {"d":"M2 8L2 17C2 18.656 3.344 20 5 20L8 20","key":"2"}),
    createElement('path', {"d":"M2 4L2 9C2 10.656 3.344 12 5 12L8 12","key":"3"}),
    createElement('path', {"d":"M12 20L22 20","key":"4"})
  );
});

ListTree.displayName = 'ListTree';

module.exports = ListTree;
module.exports.ListTree = ListTree;
module.exports.default = ListTree;

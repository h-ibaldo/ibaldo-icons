'use strict';

const { createElement, forwardRef } = require('react');

const BuildingAnnexGrid = forwardRef(function BuildingAnnexGrid(
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
    createElement('path', {"d":"M16 3L2 3L2 22L16 22Z","key":"0"}),
    createElement('path', {"d":"M16 22L22 22L22 8L16 8","key":"1"}),
    createElement('path', {"d":"M7 8L6 8L6 7L7 7Z","key":"2"}),
    createElement('path', {"d":"M12 8L11 8L11 7L12 7Z","key":"3"}),
    createElement('path', {"d":"M7 13L6 13L6 12L7 12Z","key":"4"}),
    createElement('path', {"d":"M12 13L11 13L11 12L12 12Z","key":"5"}),
    createElement('path', {"d":"M7 18L6 18L6 17L7 17Z","key":"6"}),
    createElement('path', {"d":"M12 18L11 18L11 17L12 17Z","key":"7"}),
    createElement('path', {"d":"M18 13L17 13L17 12L18 12Z","key":"8"}),
    createElement('path', {"d":"M18 18L17 18L17 17L18 17Z","key":"9"})
  );
});

BuildingAnnexGrid.displayName = 'BuildingAnnexGrid';

module.exports = BuildingAnnexGrid;
module.exports.BuildingAnnexGrid = BuildingAnnexGrid;
module.exports.default = BuildingAnnexGrid;

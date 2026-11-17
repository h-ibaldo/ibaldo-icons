'use strict';

const { createElement, forwardRef } = require('react');

const BuildingAnnex = forwardRef(function BuildingAnnex(
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
    createElement('path', {"d":"M14 2L2 2L2 22L14 22Z","key":"0"}),
    createElement('path', {"d":"M14 22L22 22L22 7L14 7","key":"1"}),
    createElement('path', {"d":"M6 7L6 7","key":"2"}),
    createElement('path', {"d":"M10 7L10 7","key":"3"}),
    createElement('path', {"d":"M6 12L6 12","key":"4"}),
    createElement('path', {"d":"M10 12L10 12","key":"5"}),
    createElement('path', {"d":"M6 17L6 17","key":"6"}),
    createElement('path', {"d":"M10 17L10 17","key":"7"}),
    createElement('path', {"d":"M18 12L18 12","key":"8"}),
    createElement('path', {"d":"M18 17L18 17","key":"9"})
  );
});

BuildingAnnex.displayName = 'BuildingAnnex';

module.exports = BuildingAnnex;
module.exports.BuildingAnnex = BuildingAnnex;
module.exports.default = BuildingAnnex;

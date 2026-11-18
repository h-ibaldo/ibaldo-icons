'use strict';

const { createElement, forwardRef } = require('react');

const BuildingIsometric = forwardRef(function BuildingIsometric(
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
    createElement('path', {"d":"M3 6L12 10L21 6L12 2Z","key":"0"}),
    createElement('path', {"d":"M3 6L3 18L12 22L21 18L21 6","key":"1"}),
    createElement('path', {"d":"M18 11L18 11","key":"2"}),
    createElement('path', {"d":"M18 15L18 15","key":"3"}),
    createElement('path', {"d":"M15 13L15 13","key":"4"}),
    createElement('path', {"d":"M12 22L12 10","key":"5"}),
    createElement('path', {"d":"M15 17L15 17","key":"6"}),
    createElement('path', {"d":"M6 11L6 11","key":"7"}),
    createElement('path', {"d":"M6 15L6 15","key":"8"}),
    createElement('path', {"d":"M9 13L9 13","key":"9"}),
    createElement('path', {"d":"M9 17L9 17","key":"10"})
  );
});

BuildingIsometric.displayName = 'BuildingIsometric';

module.exports = BuildingIsometric;
module.exports.BuildingIsometric = BuildingIsometric;
module.exports.default = BuildingIsometric;

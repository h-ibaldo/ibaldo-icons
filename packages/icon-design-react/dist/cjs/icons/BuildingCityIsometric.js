'use strict';

const { createElement, forwardRef } = require('react');

const BuildingCityIsometric = forwardRef(function BuildingCityIsometric(
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
    createElement('path', {"d":"M7 20L12 22L17 20","key":"0"}),
    createElement('path', {"d":"M7 4L12 6L17 4","key":"1"}),
    createElement('path', {"d":"M17 4L12 2L7 4","key":"2"}),
    createElement('path', {"d":"M7 11L2 9L2 18L7 20","key":"3"}),
    createElement('path', {"d":"M7 20L7 4","key":"4"}),
    createElement('path', {"d":"M17 20L17 4","key":"5"}),
    createElement('path', {"d":"M12 22L12 6","key":"6"}),
    createElement('path', {"d":"M7 7L2 9","key":"7"}),
    createElement('path', {"d":"M17 11L22 9L22 18L17 20","key":"8"}),
    createElement('path', {"d":"M17 7L22 9","key":"9"})
  );
});

BuildingCityIsometric.displayName = 'BuildingCityIsometric';

module.exports = BuildingCityIsometric;
module.exports.BuildingCityIsometric = BuildingCityIsometric;
module.exports.default = BuildingCityIsometric;

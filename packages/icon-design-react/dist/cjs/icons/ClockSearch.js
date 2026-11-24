'use strict';

const { createElement, forwardRef } = require('react');

const ClockSearch = forwardRef(function ClockSearch(
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
    createElement('polyline', {"points":"12.999999999959982 5.999999999869033 12.999999999959982 10.999999999869033 18 10.999999999887223","key":"0"}),
    createElement('circle', {"cx":"5.999999999974534","cy":"15.999999999840838","r":"3.999999999975898","key":"1"}),
    createElement('line', {"x1":"10.999999999959982","y1":"21.999999999869033","x2":"8.549072265579525","y2":"19.058898925648464","key":"2"}),
    createElement('path', {"d":"M13.999999999959982,19.941345214709145c4.499450683590112-.497985839840112,8-4.309204101560681,8-8.941345214840112,0-4.970581054691138-4.029418945308862-9-9-9-4.281860351558862,0-7.85546875,2.993896484369543-8.766174316409888,7","key":"3"})
  );
});

ClockSearch.displayName = 'ClockSearch';

module.exports = ClockSearch;
module.exports.ClockSearch = ClockSearch;
module.exports.default = ClockSearch;

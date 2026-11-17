'use strict';

const { createElement, forwardRef } = require('react');

const ArrowsHexagon1 = forwardRef(function ArrowsHexagon1(
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
    createElement('polyline', {"points":"1.999999999869942 13 4.999999999869942 11 7.999999999869942 13","key":"0"}),
    createElement('polyline', {"points":"22 11 18.99999999972988 13.000000000258296 16 10.999999999457941","key":"1"}),
    createElement('path', {"d":"M18.999999999869942,13.00000000026921v-3.970764209690969c0-.645902206539176-.311931367979923-1.252043910568318-.83752361256029-1.627466942409228l-5.120015004169545-3.657153574409676c-.635388136970505-.453848669270883-1.476803298590312-.496419893579514-2.154754264150142-.10901934182948l-5.887707119120023,3.364404068070144","key":"2"}),
    createElement('path', {"d":"M4.999999999869942,11v3.970764209409026c0,.645902206540995.311931367969919,1.252043910570137.83752361256029,1.627466942420142l5.120015004169545,3.657153574398762c.635388136970505.453848669270883,1.476803298580307.496419893581333,2.154754264150142.109019341831299l5.887707119120023-3.36440406805923","key":"3"})
  );
});

ArrowsHexagon1.displayName = 'ArrowsHexagon1';

module.exports = ArrowsHexagon1;
module.exports.ArrowsHexagon1 = ArrowsHexagon1;
module.exports.default = ArrowsHexagon1;

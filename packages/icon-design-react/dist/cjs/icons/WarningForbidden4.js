'use strict';

const { createElement, forwardRef } = require('react');

const WarningForbidden4 = forwardRef(function WarningForbidden4(
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
    createElement('line', {"x1":"12.000000004471076","y1":"16.01000000388558","x2":"12.000000004471076","y2":"16.000000003885361","key":"0"}),
    createElement('line', {"x1":"12.000000004471076","y1":"9.000000003885361","x2":"12.000000004471076","y2":"12.000000003885361","key":"1"}),
    createElement('line', {"x1":"2.000000004471076","y1":"22.000000003885361","x2":"22.000000004471076","y2":"2.000000003886271","key":"2"}),
    createElement('path', {"d":"M15.571411137269024,8.428588871077409l-1.823120117178405-3.281616210941138c-.761962890619543-1.371643066405341-2.734619140619543-1.371643066405341-3.49658203125,0l-6.601013183601026,11.881713867191138c-.542175292970569.975952148432953-.165588378898974,2.109375.670715332029431,2.64990234375","key":"3"}),
    createElement('path', {"d":"M10.000000004471076,20.000000003885361h8.600952148428405c1.524963378909888,0,2.488952636731483-1.63824462890625,1.748352050779431-2.971313476557953l-2.635009765619543-4.742980957035797","key":"4"})
  );
});

WarningForbidden4.displayName = 'WarningForbidden4';

module.exports = WarningForbidden4;
module.exports.WarningForbidden4 = WarningForbidden4;
module.exports.default = WarningForbidden4;

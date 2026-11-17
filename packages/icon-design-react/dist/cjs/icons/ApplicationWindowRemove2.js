'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindowRemove2 = forwardRef(function ApplicationWindowRemove2(
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
    createElement('line', {"x1":"14.999999993633537","y1":"14.998779299956368","x2":"8.999999993633537","y2":"14.998779299956368","key":"0"}),
    createElement('rect', {"x":"1.999999993633537","y":"1.998779299956368","width":"20","height":"20","rx":"2","ry":"2","key":"1"}),
    createElement('line', {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368","key":"2"}),
    createElement('line', {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368","key":"3"}),
    createElement('line', {"x1":"11.00999999364285","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368","key":"4"}),
    createElement('line', {"x1":"1.999999993633537","y1":"7.998779299956368","x2":"21.999999993633537","y2":"7.998779299956368","key":"5"})
  );
});

ApplicationWindowRemove2.displayName = 'ApplicationWindowRemove2';

module.exports = ApplicationWindowRemove2;
module.exports.ApplicationWindowRemove2 = ApplicationWindowRemove2;
module.exports.default = ApplicationWindowRemove2;

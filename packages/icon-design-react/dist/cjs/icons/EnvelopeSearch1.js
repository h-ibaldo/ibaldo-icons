'use strict';

const { createElement, forwardRef } = require('react');

const EnvelopeSearch1 = forwardRef(function EnvelopeSearch1(
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
    createElement('circle', {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4","key":"0"}),
    createElement('line', {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368","key":"1"}),
    createElement('path', {"d":"M10.999999976489562,15.998779299956368H2.999999976489562c-.552284749830505,0-1-.447715250167676-1-1V2.998779299956368c0-.552284749832324.447715250169495-1,1-1h18c.552284749830505,0,1,.447715250167676,1,1v7","key":"2"}),
    createElement('path', {"d":"M2.332641578050243,2.264892581206368l9.042663350890507,7.234130680706585c.365218650918905.292174920741672.884171444178719.292174920741672,1.249390095108538,0l9.042663350881412-7.234130680706585","key":"3"})
  );
});

EnvelopeSearch1.displayName = 'EnvelopeSearch1';

module.exports = EnvelopeSearch1;
module.exports.EnvelopeSearch1 = EnvelopeSearch1;
module.exports.default = EnvelopeSearch1;

'use strict';

const { createElement, forwardRef } = require('react');

const Tab2Close = forwardRef(function Tab2Close(
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
    createElement('polygon', {"points":"22.025268532079281 21.998779297172405 2.025268532079281 21.998779297172405 2.025268532079281 1.998779297172405 11.025268532079281 1.998779297172405 11.025268532079281 5.998779297172405 22.025268532079281 5.998779297172405 22.025268532079281 21.998779297172405","key":"0"}),
    createElement('line', {"x1":"22.025268532079281","y1":"1.998779297172405","x2":"15.025268532079281","y2":"1.998779297172405","key":"1"}),
    createElement('line', {"x1":"15.025268532079281","y1":"16.998779297172405","x2":"9.025268532079281","y2":"10.998779297172405","key":"2"}),
    createElement('line', {"x1":"15.025268532079281","y1":"10.998779297172405","x2":"9.025268532079281","y2":"16.998779297172405","key":"3"})
  );
});

Tab2Close.displayName = 'Tab2Close';

module.exports = Tab2Close;
module.exports.Tab2Close = Tab2Close;
module.exports.default = Tab2Close;

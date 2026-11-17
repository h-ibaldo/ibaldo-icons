'use strict';

const { createElement, forwardRef } = require('react');

const CheckboxRadioSelect1 = forwardRef(function CheckboxRadioSelect1(
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
    createElement('circle', {"cx":"11.974731440099276","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement('circle', {"cx":"11.974731440099276","cy":"12.000000003885361","r":"6","key":"1"}),
    createElement('polyline', {"points":"9.974731440099276 12.000000003885361 11.308064773440492 13.333333337217482 13.974731440099276 10.666666670556879","key":"2"})
  );
});

CheckboxRadioSelect1.displayName = 'CheckboxRadioSelect1';

module.exports = CheckboxRadioSelect1;
module.exports.CheckboxRadioSelect1 = CheckboxRadioSelect1;
module.exports.default = CheckboxRadioSelect1;

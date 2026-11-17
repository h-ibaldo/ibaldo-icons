'use strict';

const { createElement, forwardRef } = require('react');

const CheckboxRadioSelect2 = forwardRef(function CheckboxRadioSelect2(
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
    createElement('circle', {"cx":"12.025268554611102","cy":"12.000000000709406","r":"10","key":"0"}),
    createElement('polyline', {"points":"10.025268554611102 11.000000000709406 12.025268554611102 13.000000000709406 16.025268554611102 8.000000000709406","key":"1"}),
    createElement('path', {"d":"M13.311828613199395,6.141784668678156c-.414855957018517-.090759277340112-.844482421880457-.14178466796875-1.286560058588293-.14178466796875-3.313720703130457,0-6,2.686279296878638-6,6,0,3.313720703128638,2.686279296869543,6,6,6,3.313720703119543,0,6-2.686279296871362,6-6,0-.45196533203125-.054077148430224-.890563964840112-.148803710930224-1.31396484375","key":"2"})
  );
});

CheckboxRadioSelect2.displayName = 'CheckboxRadioSelect2';

module.exports = CheckboxRadioSelect2;
module.exports.CheckboxRadioSelect2 = CheckboxRadioSelect2;
module.exports.default = CheckboxRadioSelect2;

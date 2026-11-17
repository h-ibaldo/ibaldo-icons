'use strict';

const { createElement, forwardRef } = require('react');

const SunSpoke = forwardRef(function SunSpoke(
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
    createElement('circle', {"cx":"12.000000000314685","cy":"11.999999999998636","r":"3.999999999999773","key":"0"}),
    createElement('line', {"x1":"16.000000000314685","y1":"12.000000000178261","x2":"22.000000000314685","y2":"12.000000000447471","key":"1"}),
    createElement('line', {"x1":"2.000000000314685","y1":"11.999999999548891","x2":"8.000000000314685","y2":"11.99999999981992","key":"2"}),
    createElement('line', {"x1":"14.828427124997688","y1":"14.828427124806694","x2":"19.071067812017645","y2":"19.07106781202674","key":"3"}),
    createElement('line', {"x1":"4.92893218860263","y1":"4.928932187971441","x2":"9.171572875631682","y2":"9.171572875191487","key":"4"}),
    createElement('line', {"x1":"12.000000000314685","y1":"15.999999999998181","x2":"12.000000000316504","y2":"21.999999999998181","key":"5"}),
    createElement('line', {"x1":"12.000000000312866","y1":"1.999999999998181","x2":"12.000000000314685","y2":"7.999999999998181","key":"6"}),
    createElement('line', {"x1":"9.171572875628044","y1":"14.828427124810332","x2":"4.928932188606268","y2":"19.071067812021283","key":"7"}),
    createElement('line', {"x1":"19.071067812023102","y1":"4.928932187976898","x2":"14.828427125001326","y2":"9.17157287518603","key":"8"})
  );
});

SunSpoke.displayName = 'SunSpoke';

module.exports = SunSpoke;
module.exports.SunSpoke = SunSpoke;
module.exports.default = SunSpoke;

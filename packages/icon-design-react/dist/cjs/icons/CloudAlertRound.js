'use strict';

const { createElement, forwardRef } = require('react');

const CloudAlertRound = forwardRef(function CloudAlertRound(
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
    createElement('path', {"d":"M17.924255383690252,9.093139648438409c-.438171386720569-2.882202148440228-2.919616699220569-5.093139648440228-5.924255371101026-5.093139648440228-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371088293,5.093139648440228-2.318725585941138.434509277339203-4.075744628911707,2.462036132809772-4.075744628911707,4.906860351559772,0,2.761413574209655,2.238525390630457,5,5,5h10c2.761474609380457,0,5-2.238586425790345,5-5,0-2.44482421875-1.757019042959655-4.472351074220569-4.075744628898974-4.906860351559772Z","key":"0"}),
    createElement('line', {"x1":"12","y1":"8.999999973497324","x2":"12","y2":"11.999999973497324","key":"1"}),
    createElement('line', {"x1":"12","y1":"14.989999973497106","x2":"12","y2":"14.999999973497324","key":"2"})
  );
});

CloudAlertRound.displayName = 'CloudAlertRound';

module.exports = CloudAlertRound;
module.exports.CloudAlertRound = CloudAlertRound;
module.exports.default = CloudAlertRound;

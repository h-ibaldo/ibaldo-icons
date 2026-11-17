'use strict';

const { createElement, forwardRef } = require('react');

const GraphHorizontalBarsDots = forwardRef(function GraphHorizontalBarsDots(
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
    createElement('rect', {"x":"1.949462885142566","y":"2.000000000480213","width":"20","height":"4","key":"0"}),
    createElement('rect', {"x":"1.949462885142566","y":"10.000000000480213","width":"20","height":"4","key":"1"}),
    createElement('rect', {"x":"1.949462885142566","y":"18.000000000480213","width":"20","height":"4","key":"2"}),
    createElement('line', {"x1":"7.949462885142566","y1":"2.000000000480213","x2":"7.949462885142566","y2":"6.000000000480213","key":"3"}),
    createElement('line', {"x1":"15.949462885142566","y1":"10.000000000480213","x2":"15.949462885142566","y2":"14.000000000480213","key":"4"}),
    createElement('line', {"x1":"11.949462885142566","y1":"18.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213","key":"5"}),
    createElement('line', {"x1":"3.939462885140529","y1":"4.000000000480213","x2":"3.949462885142566","y2":"4.000000000480213","key":"6"}),
    createElement('line', {"x1":"5.949462885140747","y1":"4.000000000480213","x2":"5.939462885142348","y2":"4.000000000480213","key":"7"}),
    createElement('line', {"x1":"3.949462885140747","y1":"12.000000000480213","x2":"3.939462885142348","y2":"12.000000000480213","key":"8"}),
    createElement('line', {"x1":"5.939462885140529","y1":"12.000000000480213","x2":"5.949462885142566","y2":"12.000000000480213","key":"9"}),
    createElement('line', {"x1":"7.939462885142348","y1":"12.000000000480213","x2":"7.949462885142566","y2":"12.000000000480213","key":"10"}),
    createElement('line', {"x1":"9.939462885142348","y1":"12.000000000480213","x2":"9.949462885142566","y2":"12.000000000480213","key":"11"}),
    createElement('line', {"x1":"11.949462885140747","y1":"12.000000000480213","x2":"11.939462885142348","y2":"12.000000000480213","key":"12"}),
    createElement('line', {"x1":"13.949462885140747","y1":"12.000000000480213","x2":"13.939462885142348","y2":"12.000000000480213","key":"13"}),
    createElement('line', {"x1":"3.939462885140529","y1":"20.000000000480213","x2":"3.949462885142566","y2":"20.000000000480213","key":"14"}),
    createElement('line', {"x1":"5.949462885140747","y1":"20.000000000480213","x2":"5.939462885142348","y2":"20.000000000480213","key":"15"}),
    createElement('line', {"x1":"7.939462885142348","y1":"20.000000000480213","x2":"7.949462885142566","y2":"20.000000000480213","key":"16"}),
    createElement('line', {"x1":"9.939462885142348","y1":"20.000000000480213","x2":"9.949462885142566","y2":"20.000000000480213","key":"17"})
  );
});

GraphHorizontalBarsDots.displayName = 'GraphHorizontalBarsDots';

module.exports = GraphHorizontalBarsDots;
module.exports.GraphHorizontalBarsDots = GraphHorizontalBarsDots;
module.exports.default = GraphHorizontalBarsDots;

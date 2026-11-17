'use strict';

const { createElement, forwardRef } = require('react');

const ProgressDots = forwardRef(function ProgressDots(
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
    createElement('rect', {"x":"10.999999881978297","y":"10.998779328575495","width":"1.999999978605018","height":"1.999999921429323","rx":".999402546253466","ry":".999402546253466","transform":"translate(23.998778647914726 -.001221094594722) rotate(89.999997552246796)","key":"0"}),
    createElement('rect', {"x":"18.999999947934185","y":"10.998779328575097","width":"1.99999997860499","height":"1.999999921430119","rx":".999402546133562","ry":".999402546133562","transform":"translate(31.9987783751534 -8.0012211587186) rotate(89.9999975609948)","key":"1"}),
    createElement('rect', {"x":"2.999999947934185","y":"10.998779328573221","width":"1.99999997860499","height":"1.99999992143387","rx":".99940254612814","ry":".99940254612814","transform":"translate(15.998779056455868 7.998778841892505) rotate(89.99999756391297)","key":"2"})
  );
});

ProgressDots.displayName = 'ProgressDots';

module.exports = ProgressDots;
module.exports.ProgressDots = ProgressDots;
module.exports.default = ProgressDots;

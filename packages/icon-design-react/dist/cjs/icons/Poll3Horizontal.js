'use strict';

const { createElement, forwardRef } = require('react');

const Poll3Horizontal = forwardRef(function Poll3Horizontal(
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
    createElement('rect', {"x":"9.999999999810825","y":"1.99999999981992","width":"6","height":"4","key":"0"}),
    createElement('rect', {"x":"9.999999999810825","y":"9.99999999981992","width":"12","height":"4","key":"1"}),
    createElement('rect', {"x":"9.999999999810825","y":"17.99999999981992","width":"9","height":"4","key":"2"}),
    createElement('rect', {"x":"1.999999999810825","y":"1.99999999981992","width":"4","height":"4","key":"3"}),
    createElement('rect', {"x":"1.999999999810825","y":"9.99999999981992","width":"4","height":"4","key":"4"}),
    createElement('rect', {"x":"1.999999999810825","y":"17.99999999981992","width":"4","height":"4","key":"5"})
  );
});

Poll3Horizontal.displayName = 'Poll3Horizontal';

module.exports = Poll3Horizontal;
module.exports.Poll3Horizontal = Poll3Horizontal;
module.exports.default = Poll3Horizontal;

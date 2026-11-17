'use strict';

const { createElement, forwardRef } = require('react');

const Cloud3Box = forwardRef(function Cloud3Box(
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
    createElement('rect', {"x":"2","y":"1.999999973768354","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('path', {"d":"M15.5,10.999999973497324h-.5c0-1.656860351558862-1.343139648439319-3-3-3s-3,1.343139648441138-3,3h-.5c-1.380737304689319,0-2.5,1.119262695301586-2.5,2.5,0,1.380737304691138,1.119262695310681,2.5,2.5,2.5h7c1.380737304689319,0,2.5-1.119262695308862,2.5-2.5,0-1.380737304698414-1.119262695310681-2.5-2.5-2.5Z","key":"1"})
  );
});

Cloud3Box.displayName = 'Cloud3Box';

module.exports = Cloud3Box;
module.exports.Cloud3Box = Cloud3Box;
module.exports.default = Cloud3Box;

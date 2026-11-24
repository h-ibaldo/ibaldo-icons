'use strict';

const { createElement, forwardRef } = require('react');

const DiagramChain = forwardRef(function DiagramChain(
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
    createElement('rect', {"x":"2.016630450971206","y":"3.000000000480213","width":"4","height":"4","key":"0"}),
    createElement('rect', {"x":"18.016630450973025","y":"10.000000000480213","width":"4","height":"4","key":"1"}),
    createElement('rect', {"x":"10.016630450973025","y":"3.000000000480213","width":"4","height":"4","key":"2"}),
    createElement('rect', {"x":"2.016630450971206","y":"17.000000000480213","width":"4","height":"4","key":"3"}),
    createElement('rect', {"x":"10.016630450973025","y":"17.000000000480213","width":"4","height":"4","key":"4"}),
    createElement('line', {"x1":"6.016630450973025","y1":"5.000000000480213","x2":"10.016630450973025","y2":"5.000000000480213","key":"5"}),
    createElement('line', {"x1":"6.016630450973025","y1":"19.000000000480213","x2":"10.016630450973025","y2":"19.000000000480213","key":"6"}),
    createElement('path', {"d":"M14.016630450973025,5.000000000480213h5c.552284749829596,0,1,.447715250167676,1,1v4","key":"7"}),
    createElement('path', {"d":"M14.016630450973025,19.000000000480213h5c.552284749829596,0,1-.447715250171314,1-1v-4","key":"8"})
  );
});

DiagramChain.displayName = 'DiagramChain';

module.exports = DiagramChain;
module.exports.DiagramChain = DiagramChain;
module.exports.default = DiagramChain;

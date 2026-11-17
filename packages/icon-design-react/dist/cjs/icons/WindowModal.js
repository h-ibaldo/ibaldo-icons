'use strict';

const { createElement, forwardRef } = require('react');

const WindowModal = forwardRef(function WindowModal(
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
    createElement('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"2","y1":"8","x2":"22","y2":"8","key":"1"}),
    createElement('line', {"x1":"5.010000000000218","y1":"5","x2":"5","y2":"5","key":"2"}),
    createElement('line', {"x1":"8.010000000000218","y1":"5","x2":"8","y2":"5","key":"3"}),
    createElement('line', {"x1":"11.010000000000218","y1":"5","x2":"11","y2":"5","key":"4"}),
    createElement('rect', {"x":"9","y":"12","width":"10","height":"7","rx":".853912563829908","ry":".853912563829908","key":"5"})
  );
});

WindowModal.displayName = 'WindowModal';

module.exports = WindowModal;
module.exports.WindowModal = WindowModal;
module.exports.default = WindowModal;

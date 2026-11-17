'use strict';

const { createElement, forwardRef } = require('react');

const PresentationKeynote = forwardRef(function PresentationKeynote(
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
    createElement('rect', {"x":"1.999999998490239","y":"1.998782814707738","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"1.999999998490239","y1":"6.9987828147041","x2":"21.999999998490239","y2":"6.9987828147041","key":"1"}),
    createElement('line', {"x1":"1.999999998490239","y1":"16.9987828147041","x2":"21.999999998490239","y2":"16.9987828147041","key":"2"})
  );
});

PresentationKeynote.displayName = 'PresentationKeynote';

module.exports = PresentationKeynote;
module.exports.PresentationKeynote = PresentationKeynote;
module.exports.default = PresentationKeynote;

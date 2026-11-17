'use strict';

const { createElement, forwardRef } = require('react');

const GaugeTeardropOpen = forwardRef(function GaugeTeardropOpen(
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
    createElement('path', {"d":"M17 3.348C15.527 2.496 13.824 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.176 21.504 8.473 20.652 7","key":"0"}),
    createElement('path', {"d":"M16.242 7.758L10.578 10.023C9.707 10.371 9.09 11.156 8.957 12.082C8.711 13.809 10.191 15.289 11.918 15.043C12.844 14.91 13.629 14.293 13.977 13.422Z","key":"1"})
  );
});

GaugeTeardropOpen.displayName = 'GaugeTeardropOpen';

module.exports = GaugeTeardropOpen;
module.exports.GaugeTeardropOpen = GaugeTeardropOpen;
module.exports.default = GaugeTeardropOpen;

'use strict';

const { createElement, forwardRef } = require('react');

const MusicNoteHook = forwardRef(function MusicNoteHook(
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
    createElement('ellipse', {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement('path', {"d":"M20,6.999999999998181v-.000004999999874c0-2.761420986889789-2.238574012269964-4.999995000000126-4.999995000000126-4.999995000000126h-3.000004999999874v16","key":"1"})
  );
});

MusicNoteHook.displayName = 'MusicNoteHook';

module.exports = MusicNoteHook;
module.exports.MusicNoteHook = MusicNoteHook;
module.exports.default = MusicNoteHook;

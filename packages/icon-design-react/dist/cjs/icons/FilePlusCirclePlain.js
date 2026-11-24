'use strict';

const { createElement, forwardRef } = require('react');

const FilePlusCirclePlain = forwardRef(function FilePlusCirclePlain(
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
    createElement('path', {"d":"M16 15.034L16 19.034","key":"0"}),
    createElement('path', {"d":"M18 17.034L14 17.034","key":"1"}),
    createElement('path', {"d":"M11 17.034C11 14.272 13.239 12.034 16 12.034C18.761 12.034 21 14.272 21 17.034C21 19.795 18.761 22.034 16 22.034C13.239 22.034 11 19.795 11 17.034Z","key":"2"}),
    createElement('path', {"d":"M20 9.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L9 22.034","key":"3"})
  );
});

FilePlusCirclePlain.displayName = 'FilePlusCirclePlain';

module.exports = FilePlusCirclePlain;
module.exports.FilePlusCirclePlain = FilePlusCirclePlain;
module.exports.default = FilePlusCirclePlain;

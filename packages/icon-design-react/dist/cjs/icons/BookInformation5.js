'use strict';

const { createElement, forwardRef } = require('react');

const BookInformation5 = forwardRef(function BookInformation5(
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
    createElement('rect', {"x":"5.025268548599342","y":"2.998779303362426","width":"15","height":"18","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"3.025268548599342","y1":"6.998779303362426","x2":"7.025268548599342","y2":"6.998779303362426","key":"1"}),
    createElement('line', {"x1":"3.025268548599342","y1":"11.998779303362426","x2":"7.025268548599342","y2":"11.998779303362426","key":"2"}),
    createElement('line', {"x1":"3.025268548599342","y1":"16.998779303362426","x2":"7.025268548599342","y2":"16.998779303362426","key":"3"}),
    createElement('line', {"x1":"13.025268548599342","y1":"8.988779303362207","x2":"13.025268548599342","y2":"8.998779303362426","key":"4"}),
    createElement('line', {"x1":"13.025268548599342","y1":"14.998779303362426","x2":"13.025268548599342","y2":"11.998779303362426","key":"5"})
  );
});

BookInformation5.displayName = 'BookInformation5';

module.exports = BookInformation5;
module.exports.BookInformation5 = BookInformation5;
module.exports.default = BookInformation5;

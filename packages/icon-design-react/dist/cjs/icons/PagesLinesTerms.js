'use strict';

const { createElement, forwardRef } = require('react');

const PagesLinesTerms = forwardRef(function PagesLinesTerms(
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
    createElement('rect', {"x":"7.025268548599342","y":"5.998779303362426","width":"15","height":"16","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M16.025268548599342,5.998779303362426v-3c0-.552284749829596-.447715250169495-1-1-1H3.025268548599342c-.552284749830505,0-1,.447715250170404-1,1v14c0,.552284749831415.447715250169495,1,1,1h4","key":"1"}),
    createElement('line', {"x1":"11.025268548599342","y1":"9.998779303362426","x2":"18.025268548599342","y2":"9.998779303362426","key":"2"}),
    createElement('line', {"x1":"11.025268548599342","y1":"13.998779303362426","x2":"18.025268548599342","y2":"13.998779303362426","key":"3"}),
    createElement('line', {"x1":"11.025268548599342","y1":"17.998779303362426","x2":"18.025268548599342","y2":"17.998779303362426","key":"4"})
  );
});

PagesLinesTerms.displayName = 'PagesLinesTerms';

module.exports = PagesLinesTerms;
module.exports.PagesLinesTerms = PagesLinesTerms;
module.exports.default = PagesLinesTerms;

'use strict';

const { createElement, forwardRef } = require('react');

const TagPercentStringRound = forwardRef(function TagPercentStringRound(
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
    createElement('path', {"d":"M4 6.828L4 13C4 13.531 4.211 14.039 4.586 14.414L11.586 21.414C12.367 22.195 13.633 22.195 14.414 21.414L20.586 15.242C21.367 14.461 21.367 13.195 20.586 12.414L13.586 5.414C13.211 5.039 12.703 4.828 12.172 4.828L6 4.828C4.895 4.828 4 5.723 4 6.828Z","key":"0"}),
    createElement('path', {"d":"M8.5 9.656C8.223 9.656 8 9.434 8 9.156C8 8.883 8.223 8.656 8.5 8.656C8.777 8.656 9 8.883 9 9.156C9 9.434 8.777 9.656 8.5 9.656Z","key":"1"}),
    createElement('path', {"d":"M8 1.828L8 8.828","key":"2"}),
    createElement('path', {"d":"M13 11L13 11","key":"3"}),
    createElement('path', {"d":"M13 17L13 17","key":"4"}),
    createElement('path', {"d":"M10 14L16 14","key":"5"})
  );
});

TagPercentStringRound.displayName = 'TagPercentStringRound';

module.exports = TagPercentStringRound;
module.exports.TagPercentStringRound = TagPercentStringRound;
module.exports.default = TagPercentStringRound;

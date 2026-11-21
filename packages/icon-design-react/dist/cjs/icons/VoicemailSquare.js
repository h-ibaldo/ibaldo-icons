'use strict';

const { createElement, forwardRef } = require('react');

const VoicemailSquare = forwardRef(function VoicemailSquare(
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
    createElement('path', {"d":"M5 11.5C5 10.121 6.121 9 7.5 9C8.879 9 10 10.121 10 11.5C10 12.879 8.879 14 7.5 14C6.121 14 5 12.879 5 11.5Z","key":"0"}),
    createElement('path', {"d":"M14 11.5C14 10.121 15.121 9 16.5 9C17.879 9 19 10.121 19 11.5C19 12.879 17.879 14 16.5 14C15.121 14 14 12.879 14 11.5Z","key":"1"}),
    createElement('path', {"d":"M7.5 14L16.5 14","key":"2"}),
    createElement('path', {"d":"M5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4Z","key":"3"})
  );
});

VoicemailSquare.displayName = 'VoicemailSquare';

module.exports = VoicemailSquare;
module.exports.VoicemailSquare = VoicemailSquare;
module.exports.default = VoicemailSquare;

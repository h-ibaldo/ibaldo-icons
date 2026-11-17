'use strict';

const { createElement, forwardRef } = require('react');

const MicrophoneOff = forwardRef(function MicrophoneOff(
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
    createElement('path', {"d":"M12 18L12 22","key":"0"}),
    createElement('path', {"d":"M16 22L8 22","key":"1"}),
    createElement('path', {"d":"M5.773 15C7.234 16.828 9.477 18 12 18C14.523 18 16.766 16.828 18.227 15","key":"2"}),
    createElement('path', {"d":"M3 17L21 3","key":"3"}),
    createElement('path', {"d":"M8.855 12.445C9.586 13.383 10.715 14 12 14C14.211 14 16 12.211 16 10L16 6.887","key":"4"}),
    createElement('path', {"d":"M14.863 3.215C14.137 2.469 13.125 2 12 2C9.793 2 8 3.789 8 6L8 8.555","key":"5"})
  );
});

MicrophoneOff.displayName = 'MicrophoneOff';

module.exports = MicrophoneOff;
module.exports.MicrophoneOff = MicrophoneOff;
module.exports.default = MicrophoneOff;

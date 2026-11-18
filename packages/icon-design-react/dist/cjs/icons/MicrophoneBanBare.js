'use strict';

const { createElement, forwardRef } = require('react');

const MicrophoneBanBare = forwardRef(function MicrophoneBanBare(
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
    createElement('path', {"d":"M9 19L9 22","key":"0"}),
    createElement('path', {"d":"M13 7L13 6C13 3.789 11.211 2 9 2C6.789 2 5 3.789 5 6L5 11C5 13.211 6.789 15 9 15","key":"1"}),
    createElement('path', {"d":"M2 15C3.383 17.387 5.949 19 8.906 19C9.277 19 9.645 18.977 10 18.926","key":"2"}),
    createElement('path', {"d":"M20.535 10.465C18.582 8.512 15.418 8.512 13.465 10.465C11.512 12.418 11.512 15.582 13.465 17.535C15.418 19.488 18.582 19.488 20.535 17.535C22.488 15.582 22.488 12.418 20.535 10.465Z","key":"3"}),
    createElement('path', {"d":"M13.465 17.535L20.535 10.465","key":"4"})
  );
});

MicrophoneBanBare.displayName = 'MicrophoneBanBare';

module.exports = MicrophoneBanBare;
module.exports.MicrophoneBanBare = MicrophoneBanBare;
module.exports.default = MicrophoneBanBare;

'use strict';

const { createElement, forwardRef } = require('react');

const MailDotRounded = forwardRef(function MailDotRounded(
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
    createElement('path', {"d":"M15 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5L20 5C21.105 5 22 5.895 22 7L22 12","key":"0"}),
    createElement('path', {"d":"M6 9L11.359 13.465C11.73 13.777 12.27 13.777 12.641 13.465L18 9","key":"1"}),
    createElement('path', {"d":"M18 17C18 15.895 18.895 15 20 15C21.105 15 22 15.895 22 17C22 18.105 21.105 19 20 19C18.895 19 18 18.105 18 17Z","key":"2"})
  );
});

MailDotRounded.displayName = 'MailDotRounded';

module.exports = MailDotRounded;
module.exports.MailDotRounded = MailDotRounded;
module.exports.default = MailDotRounded;

'use strict';

const { createElement, forwardRef } = require('react');

const MailLinkRound = forwardRef(function MailLinkRound(
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
    createElement('path', {"d":"M4 16L3 16C2.445 16 2 15.555 2 15L2 3C2 2.445 2.445 2 3 2L21 2C21.555 2 22 2.445 22 3L22 12","key":"0"}),
    createElement('path', {"d":"M3.109 3L10.664 9.797C11.422 10.48 12.578 10.48 13.34 9.797L20.887 3","key":"1"}),
    createElement('path', {"d":"M13 18C13 16.344 14.344 15 16 15L19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21","key":"2"}),
    createElement('path', {"d":"M17 18C17 19.656 14.656 21 13 21L11 21C9.344 21 8 19.656 8 18C8 16.344 9.344 15 11 15","key":"3"})
  );
});

MailLinkRound.displayName = 'MailLinkRound';

module.exports = MailLinkRound;
module.exports.MailLinkRound = MailLinkRound;
module.exports.default = MailLinkRound;

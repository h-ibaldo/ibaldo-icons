'use strict';

const { createElement, forwardRef } = require('react');

const AwardOneRound = forwardRef(function AwardOneRound(
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
    createElement('path', {"d":"M12.922 14.922L18 20L19 17L22 16L17.465 11.465","key":"0"}),
    createElement('path', {"d":"M18 9C18 12.313 15.313 15 12 15C8.688 15 6 12.313 6 9C6 5.688 8.688 3 12 3C15.313 3 18 5.688 18 9Z","key":"1"}),
    createElement('path', {"d":"M12 11L12 7L11 7","key":"2"}),
    createElement('path', {"d":"M6.535 11.465L2 16L5 17L6 20L11.078 14.922","key":"3"})
  );
});

AwardOneRound.displayName = 'AwardOneRound';

module.exports = AwardOneRound;
module.exports.AwardOneRound = AwardOneRound;
module.exports.default = AwardOneRound;

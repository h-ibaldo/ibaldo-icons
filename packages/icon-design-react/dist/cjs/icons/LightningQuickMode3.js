'use strict';

const { createElement, forwardRef } = require('react');

const LightningQuickMode3 = forwardRef(function LightningQuickMode3(
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
    createElement('polygon', {"points":"18.999999976489562 9.998840335112618 13.999999976489562 9.998779299956368 17.999999976489562 1.998779299956368 8.999999976489562 1.998779299956368 4.999999976489562 11.998779299956368 9.333312964779907 11.998779299956368 5.999999976489562 21.998840335112618 18.999999976489562 9.998840335112618","key":"0"})
  );
});

LightningQuickMode3.displayName = 'LightningQuickMode3';

module.exports = LightningQuickMode3;
module.exports.LightningQuickMode3 = LightningQuickMode3;
module.exports.default = LightningQuickMode3;

'use strict';

const { createElement, forwardRef } = require('react');

const LightningQuickMode2 = forwardRef(function LightningQuickMode2(
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
    createElement('polygon', {"points":"14.999999976489562 1.998779299956368 4.999999976489562 11.998779299956368 10.44000241789945 13.998779299956368 8.999999976489562 21.998840335112618 18.999999976489562 11.998779299956368 13.559997535090588 9.998779299956368 14.999999976489562 1.998779299956368","key":"0"})
  );
});

LightningQuickMode2.displayName = 'LightningQuickMode2';

module.exports = LightningQuickMode2;
module.exports.LightningQuickMode2 = LightningQuickMode2;
module.exports.default = LightningQuickMode2;

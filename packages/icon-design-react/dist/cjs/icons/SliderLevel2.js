'use strict';

const { createElement, forwardRef } = require('react');

const SliderLevel2 = forwardRef(function SliderLevel2(
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
    createElement('path', {"d":"M11.707106758280133,16.292889782249404l-2,2c-.390524291749898.390524291749898-1.023689270619798.390524291749898-1.414213562369696,0l-2-2c-.1875363784402-.187536378449295-.292893218811514-.441890291349409-.292893218811514-.707106781188486V6.999996563434252c0-.552284749828686.447715250171314-1,1-1h4c.552284749830505,0,1,.447715250171314,1,1v8.585786437626666c0,.265216489839077-.105356840369495.519570402739191-.29289321881879.707106781188486Z","key":"0"}),
    createElement('path', {"d":"M11.999999977098923,9.99999656343789h9c.552284749830505,0,1,.447715250167676,1,1v2c0,.552284749828686-.447715250169495,1-1,1h-9","key":"1"}),
    createElement('path', {"d":"M5.999999977098923,13.99999656343789h-3c-.552284749828686,0-1-.447715250171314-1-1v-2c0-.552284749832324.447715250171314-1,1-1h3","key":"2"})
  );
});

SliderLevel2.displayName = 'SliderLevel2';

module.exports = SliderLevel2;
module.exports.SliderLevel2 = SliderLevel2;
module.exports.default = SliderLevel2;

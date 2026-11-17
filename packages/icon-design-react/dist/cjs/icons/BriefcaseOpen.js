'use strict';

const { createElement, forwardRef } = require('react');

const BriefcaseOpen = forwardRef(function BriefcaseOpen(
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
    createElement('path', {"d":"M22,11.999999999998181l-10,3-10-3v-4c0-.552284749830505.447715250168585-1,1-1h18c.552284749829596,0,1,.447715250169495,1,1v4Z","key":"0"}),
    createElement('path', {"d":"M3,12.29998779296875v7.700012207029431c0,.552284749830505.447715250168585,1,1,1h16c.552284749829596,0,1-.447715250169495,1-1v-7.700012207029431","key":"1"}),
    createElement('path', {"d":"M8,6.999999999998181v-3c0-.552284749830505.447715250168585-1,1-1h6c.552284749829596,0,1,.447715250169495,1,1v3","key":"2"})
  );
});

BriefcaseOpen.displayName = 'BriefcaseOpen';

module.exports = BriefcaseOpen;
module.exports.BriefcaseOpen = BriefcaseOpen;
module.exports.default = BriefcaseOpen;

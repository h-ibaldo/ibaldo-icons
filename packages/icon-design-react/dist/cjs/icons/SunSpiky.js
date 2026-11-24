'use strict';

const { createElement, forwardRef } = require('react');

const SunSpiky = forwardRef(function SunSpiky(
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
    createElement('path', {"d":"M17.085205078119543,14.1063232421875l4.914794921880457-2.106323242189319-4.914794921880457-2.106323242189319,1.98583984375-4.964782714840112-4.964721679680224,1.985900878898974-2.106323242189319-4.914794921869543-2.106323242189319,4.914794921869543-4.964721679691138-1.985900878898974,1.98583984375,4.964721679689319-4.914794921869543,2.106384277340112,4.914794921869543,2.106384277340112-1.98583984375,4.964660644529431,4.964599609380457-1.985900878898974,2.1064453125,4.914855957029431,2.1064453125-4.914855957029431,4.964599609369543,1.985900878898974-1.98583984375-4.964721679680224Z","key":"0"}),
    createElement('circle', {"cx":"12","cy":"11.999999999998181","r":"2","key":"1"})
  );
});

SunSpiky.displayName = 'SunSpiky';

module.exports = SunSpiky;
module.exports.SunSpiky = SunSpiky;
module.exports.default = SunSpiky;

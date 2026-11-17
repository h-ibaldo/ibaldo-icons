'use strict';

const { createElement, forwardRef } = require('react');

const Warning3 = forwardRef(function Warning3(
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
    createElement('path', {"d":"M5.373760370259333,20.000000000479304h13.20194215956144c1.524968575158709,0,2.488904761028607-1.638223486534116,1.748314552240117-2.971285862357036l-6.600971079771625-11.88174794360566c-.762010472330076-1.371618850189407-2.734618632168349-1.371618850189407-3.49662910448933,0l-6.60097107978072,11.88174794360566c-.740590208779395,1.333062375822919.223345977090503,2.971285862357036,1.748314552240117,2.971285862357036Z","key":"0"})
  );
});

Warning3.displayName = 'Warning3';

module.exports = Warning3;
module.exports.Warning3 = Warning3;
module.exports.default = Warning3;

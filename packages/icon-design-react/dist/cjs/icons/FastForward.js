'use strict';

const { createElement, forwardRef } = require('react');

const FastForward = forwardRef(function FastForward(
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
    createElement('path', {"d":"M2 4.641L2 19.363C2 20.188 2.98 20.621 3.59 20.066L11.688 12.703C12.105 12.328 12.105 11.672 11.688 11.297L3.59 3.934C2.98 3.379 2 3.813 2 4.641Z","key":"0"}),
    createElement('path', {"d":"M12 4.641L12 19.363C12 20.188 12.98 20.621 13.59 20.066L21.688 12.703C22.105 12.328 22.105 11.672 21.688 11.297L13.59 3.934C12.98 3.379 12 3.813 12 4.641Z","key":"1"})
  );
});

FastForward.displayName = 'FastForward';

module.exports = FastForward;
module.exports.FastForward = FastForward;
module.exports.default = FastForward;

'use strict';

const { createElement, forwardRef } = require('react');

const PanelRight = forwardRef(function PanelRight(
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
    createElement('rect', {"x":"2.050537047695798","y":"1.997697219531801","width":"20","height":"19.999864816289119","rx":"1.999999999971351","ry":"1.999999999971351","key":"0"}),
    createElement('polyline', {"points":"22.050450129007004 5.997562036226554 17.050450129007004 5.997562036001 17.050450128646844 17.997426743359938 22.050450128646844 17.997426743585493","key":"1"})
  );
});

PanelRight.displayName = 'PanelRight';

module.exports = PanelRight;
module.exports.PanelRight = PanelRight;
module.exports.default = PanelRight;

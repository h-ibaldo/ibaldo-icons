'use strict';

const { createElement, forwardRef } = require('react');

const InfoBlock = forwardRef(function InfoBlock(
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
    createElement('circle', {"cx":"12.025268553439673","cy":"4.99999656424734","r":"3","key":"0"}),
    createElement('rect', {"x":"10.025268553439673","y":"11.99999656424734","width":"4","height":"10","key":"1"})
  );
});

InfoBlock.displayName = 'InfoBlock';

module.exports = InfoBlock;
module.exports.InfoBlock = InfoBlock;
module.exports.default = InfoBlock;

'use strict';

const { createElement, forwardRef } = require('react');

const Trash7 = forwardRef(function Trash7(
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
    createElement('polyline', {"points":"22.025268545410654 4.000000000133696 15.025268545410654 4.000000000448381 15.025268545319705 2.000000000448381 9.025268545319705 2.00000000071941 9.025268545410654 4.00000000071941 2.025268545410654 4.000000001032276","key":"0"}),
    createElement('path', {"d":"M20.025268545410654,4.000000000224645l.00000000072032,16c.000000000049113,1.104569499661011-.895430500251678,2.000000000040018-1.99999999991087,2.00000000008913l-12,.00000000053933c-1.104569499659192.000000000048203-2.000000000040018-.895430500248949-2.00000000008913-1.999999999911779l-.00000000072032-16","key":"1"})
  );
});

Trash7.displayName = 'Trash7';

module.exports = Trash7;
module.exports.Trash7 = Trash7;
module.exports.default = Trash7;

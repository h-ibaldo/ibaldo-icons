'use strict';

const { createElement, forwardRef } = require('react');

const AtSignCircle = forwardRef(function AtSignCircle(
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
    createElement('circle', {"cx":"12.000000005029506","cy":"12.000000000453838","r":"10","key":"0"}),
    createElement('path', {"d":"M12.000000005029506,18.000000000453838c-3.313708498788401,0-6-2.686291501200685-6-6,0-3.313708498798405,2.686291501211599-6,6-6,3.313708498801134,0,6,2.686291501201595,6,6","key":"1"}),
    createElement('circle', {"cx":"12.000000005029506","cy":"12.000000000453838","r":"2","key":"2"}),
    createElement('path', {"d":"M14.00000000504042,12.000000000455657v.000001999999768c-.000000000010914,1.104568418595591.895429604910532,1.999998000000232,1.999997999999323,1.999998000000232h.000003999999535c1.10456839509061,0,1.999997999990228-.895429581404642,1.999998000001142-1.999998000000232v-.000001999999768","key":"3"})
  );
});

AtSignCircle.displayName = 'AtSignCircle';

module.exports = AtSignCircle;
module.exports.AtSignCircle = AtSignCircle;
module.exports.default = AtSignCircle;

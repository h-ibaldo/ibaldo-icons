'use strict';

const { createElement, forwardRef } = require('react');

const PencilPlain = forwardRef(function PencilPlain(
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
    createElement('path', {"d":"M21.171573696588894,2.914216714609211l-.000003999999535-.000004000012268c-1.10456839751896-1.104568382108482-2.895427596859008-1.10456837586753-3.999995986669092.000000013951649L2.999999992549419,17.085786445889426l-.99999999927968,4.999999999278771,4.99999999963984-.99999999963984,14.171573717620049-14.171573717620049c1.104568400360222-1.104568400369317,1.104568394119269-2.895427620649571-.000000013940735-3.999996013299096Z","key":"0"})
  );
});

PencilPlain.displayName = 'PencilPlain';

module.exports = PencilPlain;
module.exports.PencilPlain = PencilPlain;
module.exports.default = PencilPlain;

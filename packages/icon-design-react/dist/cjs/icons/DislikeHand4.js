'use strict';

const { createElement, forwardRef } = require('react');

const DislikeHand4 = forwardRef(function DislikeHand4(
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
    createElement('line', {"x1":"7.000000005000402","y1":"14.000000003886271","x2":"7.000000005000402","y2":"2.000000003886271","key":"0"}),
    createElement('path', {"d":"M20.000000005000402,14.000000003886271h-7.599975585941138l1.385375976571595,3.463562011719659c.141784667959655.3543701171875.214599609369543.7325439453125.214599609369543,1.114196777344659v.422241210935681c0,1.656860351564319-1.343139648441138,3-3,3-.552307128909888,0-1-.447692871092841-1-1v-.000183105467841c0-1.308536472497508-.355625740850883-2.592471872986607-1.028856070281108-3.714536319989747l-1.971143929718892-3.285280574542412H2.000000005000402V2.000000003886271h14.666666666680612c.807401700609262,0,1.535614730519228.485475353276343,1.846153846139714,1.23076923077133l3.333333333328483,8c.548906418971455,1.317375405506027-.418997156848491,2.76923076922867-1.846153846148809,2.76923076922867Z","key":"1"})
  );
});

DislikeHand4.displayName = 'DislikeHand4';

module.exports = DislikeHand4;
module.exports.DislikeHand4 = DislikeHand4;
module.exports.default = DislikeHand4;

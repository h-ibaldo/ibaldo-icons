'use strict';

const { createElement, forwardRef } = require('react');

const FunnelCoin = forwardRef(function FunnelCoin(
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
    createElement('path', {"d":"M3.000000022109816,9.080133591263802v-1.080130155060033h18v1.080130155060033c0,.583849774502596-.255125457009854,1.13854880809231-.698417253090156,1.51851320472997l-6.301582746909844,5.401356640209997v6l-4-1v-5l-6.301582746909844-5.401356640209997c-.443291796080302-.379964396637661-.698417253090156-.934663430227374-.698417253090156-1.51851320472997Z","key":"0"}),
    createElement('path', {"d":"M15.445190451800045,8.00000343620377c.343627929690228-.59039306640625.554809570309772-1.2677001953125.554809570309772-2,0-2.20916748046875-1.790771484369543-4-4-4-2.209228515619543,0-4,1.79083251953125-4,4,0,.7322998046875.211181640630457,1.40960693359375.554809570310681,2","key":"1"})
  );
});

FunnelCoin.displayName = 'FunnelCoin';

module.exports = FunnelCoin;
module.exports.FunnelCoin = FunnelCoin;
module.exports.default = FunnelCoin;

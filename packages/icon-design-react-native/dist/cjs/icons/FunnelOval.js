'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Ellipse, Path } = RNSvg;

const FunnelOval = forwardRef(function FunnelOval(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Ellipse, {"cx":"12.000000022109816","cy":"5.00000343620377","rx":"10","ry":"3","key":"0"}),
    createElement(Path, {"d":"M2.000000022109816,5.00000343620377v2.184927093632723c0,1.1534503341245.497921728559959,2.250754418859287,1.365981568529605,3.010306778829545l5.95102764721014,5.207149191308417c.434029919979366.37977617998331.682990784260255.928428222348884.682990784260255,1.505153389411134v3.09246354681818l4,2v-5.09246354681818c0-.57672516706225.248960864280889-1.125377209427825.682990784260255-1.505153389414772l5.95102764721014-5.207149191304779c.868059839969646-.759552359970257,1.365981568529605-1.856856444705045,1.365981568529605-3.010306778829545v-2.184927093632723","key":"1"})
  );
});

FunnelOval.displayName = 'FunnelOval';

module.exports = FunnelOval;
module.exports.FunnelOval = FunnelOval;
module.exports.default = FunnelOval;

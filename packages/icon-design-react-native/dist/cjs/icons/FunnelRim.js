'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const FunnelRim = forwardRef(function FunnelRim(
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
    createElement(Path, {"d":"M2.99999591993037,1.999999999998181h18c.55228398834879,0,.999998923100065.447714061756415,1,.999998050108843l.00000408006963,2.09246256267943c.000001124550181.576726864961529-.248960130209525,1.125380837165721-.6829915114904,1.505157925519597l-7.317014518470387,6.402381461688492v7.000000000003638l-4,2v-9L2.682990057041025,6.597615334148941c-.434028458690591-.379775271612743-.68298893247993-.928425384146976-.682990057030111-1.505148853306309l-.000004080071449-2.092464530956931c-.000001076899935-.552285511308582.447714488680504-1.000001949887519.999999999990905-1.000001949887519Z","key":"0"}),
    createElement(Line, {"x1":"2.226436349619689","y1":"5.999999999998181","x2":"21.773555490250146","y2":"5.999999999998181","key":"1"})
  );
});

FunnelRim.displayName = 'FunnelRim';

module.exports = FunnelRim;
module.exports.FunnelRim = FunnelRim;
module.exports.default = FunnelRim;

'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Path, Polyline } = RNSvg;

const TabCheckCircleStriped = forwardRef(function TabCheckCircleStriped(
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
    createElement(G, {"key":"0"},
      createElement(Circle, {"cx":"17.025268532090195","cy":"16.99877930112325","r":"5","key":"0"}),
      createElement(Polyline, {"points":"15.525268532090195 16.998779298696718 16.525268532090195 17.998779303549782 18.525268532090195 15.998779298696718","key":"1"})),
    createElement(Path, {"d":"M10.025268532090195,21.99877930112325h-6c-1.104569499670106,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500329894-2,2-2h2c.62951460666045,0,1.222291235999364.296388314665819,1.59999999998945.799999999999272l2.100000000009459,2.799999999999272c.188854381991405.251805842668546.485242696660862.400000000001455.800000000001091.400000000001455h9.5c1.104569499659192,0,2,.895430500338989,2,2v2","key":"1"}),
    createElement(Path, {"d":"M6.025268532090195,1.99877930112325h6c.62951460666045,0,1.222291235999364.296388314665819,1.59999999998945.799999999999272l2.40000000001055,3.200000000000728","key":"2"}),
    createElement(Path, {"d":"M12.025268532090195,1.99877930112325h6c.62951460666045,0,1.222291235999364.296388314665819,1.59999999998945.799999999999272l1.799999999999272,2.400000000001455c.389466384411207.51928851253615.600000000011278,1.150889359324538.600000000011278,1.799999999999272v1","key":"3"})
  );
});

TabCheckCircleStriped.displayName = 'TabCheckCircleStriped';

module.exports = TabCheckCircleStriped;
module.exports.TabCheckCircleStriped = TabCheckCircleStriped;
module.exports.default = TabCheckCircleStriped;

'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const HotspotSidesStem = forwardRef(function HotspotSidesStem(
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
    createElement(Path, {"d":"M16.217372136532504,7.757359313263805c2.343145750431177,2.343145750326585,2.343145750511212,6.142135623807917.000000000189175,8.485281374238184","key":"0"}),
    createElement(Path, {"d":"M7.732090762481675,16.242640687691164c-2.343145750429358-2.343145750324766-2.343145750519398-6.142135623806098-.000000000189175-8.485281374236365","key":"1"}),
    createElement(Path, {"d":"M19.045799261213688,4.928932188454382c3.905242917388932,3.905242917211581,3.905242917528994,10.236892706344406.000000000320142,14.142135623728791","key":"2"}),
    createElement(Path, {"d":"M4.90366363780231,19.071067812503316c-3.905242917388932-3.905242917211581-3.905242917528994-10.236892706347135-.000000000320142-14.142135623731519","key":"3"}),
    createElement(Circle, {"cx":"11.974731449501633","cy":"12.000000000636646","r":"2","key":"4"}),
    createElement(Line, {"x1":"11.974731449501633","y1":"22.000000000476575","x2":"11.974731449501633","y2":"14.000000000480213","key":"5"})
  );
});

HotspotSidesStem.displayName = 'HotspotSidesStem';

module.exports = HotspotSidesStem;
module.exports.HotspotSidesStem = HotspotSidesStem;
module.exports.default = HotspotSidesStem;

'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const HotspotStem = forwardRef(function HotspotStem(
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
    createElement(Path, {"d":"M7.732090762479856,17.242640687531093c-2.343145750430267-2.343145750321128-2.343145750519398-6.14213562380246-.000000000190084-8.485281374232727,2.343145750330223-2.343145750432996,6.142135623810645-2.343145750517579,8.485281374240003-.000000000192813,2.343145750430267,2.343145750328404,2.343145750510303,6.142135623809736.000000000190084,8.485281374240003","key":"0"}),
    createElement(Path, {"d":"M4.903663637800491,20.071067812346882c-3.905242917390751-3.905242917211581-3.905242917530813-10.236892706347135-.000000000320142-14.142135623734248,3.905242917209762-3.905242917387113,10.236892706339859-3.905242917527175,14.1421356237297-.000000000316504s3.905242917529904,10.236892706344406.000000000320142,14.142135623726972","key":"1"}),
    createElement(Circle, {"cx":"11.974731449499814","cy":"13.000000000476575","r":"2","key":"2"}),
    createElement(Line, {"x1":"11.974731449499814","y1":"22.000000000476575","x2":"11.974731449499814","y2":"15.000000000480213","key":"3"})
  );
});

HotspotStem.displayName = 'HotspotStem';

module.exports = HotspotStem;
module.exports.HotspotStem = HotspotStem;
module.exports.default = HotspotStem;

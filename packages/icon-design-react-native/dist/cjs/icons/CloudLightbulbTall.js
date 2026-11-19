'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const CloudLightbulbTall = forwardRef(function CloudLightbulbTall(
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
    createElement(Path, {"d":"M19.000000000020009,16.858581542957836c1.722229003909888-.446044921869543,3-1.996826171869543,3-3.858581542959655,0-1.866821289059772-1.284423828119543-3.421691894540345-3.013793945310681-3.862854003909888.001586914060681-.046569824229664.013793945310681-.090148925790345.013793945310681-.137145996090112,0-2.209167480470569-1.790832519529431-4-4-4-.137084960939319,0-.266723632810681.02685546875-.400268554689319.040344238279431-.762390136711474-1.787048339839203-2.534118652340112-3.040344238279431-4.599731445310681-3.040344238279431-2.761413574220569,0-5,2.238586425779431-5,5,0,.137084960940228.029541015630457.265869140610448.040344238279431.400207519529431-1.787048339840112.762390136720569-3.040344238279431,2.5341796875-3.040344238279431,4.599792480470569,0,2.049194335940228,1.235595703130457,3.8056640625,3,4.577880859360448","key":"0"}),
    createElement(Circle, {"cx":"12.000000000020009","cy":"13.858581542957836","r":"4","key":"1"}),
    createElement(Line, {"x1":"11.000000000020009","y1":"20.858581542957836","x2":"13.000000000020009","y2":"20.858581542957836","key":"2"})
  );
});

CloudLightbulbTall.displayName = 'CloudLightbulbTall';

module.exports = CloudLightbulbTall;
module.exports.CloudLightbulbTall = CloudLightbulbTall;
module.exports.default = CloudLightbulbTall;

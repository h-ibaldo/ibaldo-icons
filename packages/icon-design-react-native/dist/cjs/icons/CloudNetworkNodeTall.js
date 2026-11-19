'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const CloudNetworkNodeTall = forwardRef(function CloudNetworkNodeTall(
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
    createElement(Line, {"x1":"5.000000000020009","y1":"20.999999973508238","x2":"19.000000000020009","y2":"20.999999973508238","key":"0"}),
    createElement(Line, {"x1":"12.000000000020009","y1":"16.999999999998181","x2":"12.000000000020009","y2":"21.999999973508238","key":"1"}),
    createElement(Circle, {"cx":"12.000000000020009","cy":"20.999999973508238","r":"1","key":"2"}),
    createElement(Path, {"d":"M18.986206054709328,9.137145996088293c.001586914060681-.046569824229664.013793945310681-.090148925790345.013793945310681-.137145996090112,0-2.209167480470569-1.790832519529431-4-4-4-.137084960939319,0-.266723632810681.02685546875-.400268554689319.040344238279431-.762390136720569-1.787048339839203-2.534118652340112-3.040344238279431-4.599731445310681-3.040344238279431-2.761413574220569,0-5,2.238586425779431-5,5,0,.137084960940228.029541015619543.265869140610448.040344238279431.400207519529431-1.787048339840112.762390136720569-3.040344238279431,2.5341796875-3.040344238279431,4.599792480470569,0,2.761413574209655,2.238586425779431,5,5,5h11c2.209167480470569,0,4-1.790832519540345,4-4,0-1.866821289059772-1.284423828130457-3.421691894540345-3.013793945310681-3.862854003909888Z","key":"3"})
  );
});

CloudNetworkNodeTall.displayName = 'CloudNetworkNodeTall';

module.exports = CloudNetworkNodeTall;
module.exports.CloudNetworkNodeTall = CloudNetworkNodeTall;
module.exports.default = CloudNetworkNodeTall;

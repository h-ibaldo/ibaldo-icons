'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const CloudPlusTall = forwardRef(function CloudPlusTall(
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
    createElement(Path, {"d":"M18.986206054702052,11.13714596959835c.001586914058862-.046569824229664.013793945308862-.09014892578125.013793945308862-.137145996101026,0-2.20916748046875-1.79083251953125-4-4-4-.137084960930224,0-.266723632808862.02685546875-.400268554680224.04034423828125-.76239013671875-1.787048339840112-2.534118652351026-3.04034423828125-4.599731445319776-3.04034423828125-2.761413574211474,0-5,2.23858642578125-5,5,0,.137084960941138.029541015628638.265869140621362.040344238288526.40020751953125-1.787048339847388.76239013671875-3.040344238288526,2.5341796875-3.040344238288526,4.59979248046875,0,2.761413574211474,2.238586425788526,5,5,5h11c2.20916748046875,0,4-1.790832519538526,4-4,0-1.866821289058862-1.284423828121362-3.421691894538526-3.013793945308862-3.862854003898974Z","key":"0"}),
    createElement(Line, {"x1":"8.999999976640538","y1":"12.999999973497324","x2":"14.999999976640538","y2":"12.999999973497324","key":"1"}),
    createElement(Line, {"x1":"11.999999976640538","y1":"9.999999973497324","x2":"11.999999976640538","y2":"15.999999973497324","key":"2"})
  );
});

CloudPlusTall.displayName = 'CloudPlusTall';

module.exports = CloudPlusTall;
module.exports.CloudPlusTall = CloudPlusTall;
module.exports.default = CloudPlusTall;

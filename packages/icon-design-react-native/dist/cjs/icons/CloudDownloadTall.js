'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const CloudDownloadTall = forwardRef(function CloudDownloadTall(
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
    createElement(Path, {"d":"M18.986206054700233,11.13714596959835c.001586914060681-.046569824229664.013793945310681-.09014892578125.013793945310681-.137145996101026,0-2.20916748046875-1.79083251953125-4-4-4-.137084960930224,0-.266723632810681.02685546875-.400268554680224.04034423828125-.762390136720569-1.787048339840112-2.534118652351026-3.04034423828125-4.599731445319776-3.04034423828125-2.761413574211474,0-5,2.23858642578125-5,5,0,.137084960941138.029541015628638.265869140621362.040344238288526.40020751953125-1.787048339849207.76239013671875-3.040344238288526,2.5341796875-3.040344238288526,4.59979248046875,0,2.761413574211474,2.238586425788526,5,5,5h11c2.20916748046875,0,4-1.790832519538526,4-4,0-1.866821289058862-1.284423828121362-3.421691894538526-3.013793945310681-3.862854003898974Z","key":"0"}),
    createElement(Polyline, {"points":"10.000000000010914 12.999999973497324 11.999999987408955 14.999999973497324 14.000000000010914 12.999999973497324","key":"1"}),
    createElement(Line, {"x1":"11.999999987408955","y1":"9.999999973497324","x2":"11.999999987408955","y2":"14.999999973497324","key":"2"})
  );
});

CloudDownloadTall.displayName = 'CloudDownloadTall';

module.exports = CloudDownloadTall;
module.exports.CloudDownloadTall = CloudDownloadTall;
module.exports.default = CloudDownloadTall;

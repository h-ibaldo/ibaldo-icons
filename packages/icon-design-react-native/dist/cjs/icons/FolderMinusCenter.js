'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const FolderMinusCenter = forwardRef(function FolderMinusCenter(
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
    createElement(Path, {"d":"M19.999999914750333,20.999999999998181H3.999999936059794c-1.104569499660101,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500339899-2,2-2h3.929630589660519c.668705935499929,0,1.293168239899387.334201833509724,1.66409989927979.890598573469106l.812536329360228,1.218802853061788c.370931659389498.556396739959382.995393963789866.890598573469106,1.664099899289795.890598573469106h7.929633178259792c1.104569491610164,0,1.99999998785006.895430489210412,1.999999996510269,1.999999980818757l.000000086330147,11.00000000349246c.000000008659299,1.104569505789186-.895430494209904,2.000000015688784-2,2.000000015688784Z","key":"0"}),
    createElement(Line, {"x1":"14.999999978690539","y1":"12.999999999998181","x2":"8.999999978690539","y2":"12.999999999998181","key":"1"})
  );
});

FolderMinusCenter.displayName = 'FolderMinusCenter';

module.exports = FolderMinusCenter;
module.exports.FolderMinusCenter = FolderMinusCenter;
module.exports.default = FolderMinusCenter;

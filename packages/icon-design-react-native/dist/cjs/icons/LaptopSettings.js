'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Line, Path } = RNSvg;

const LaptopSettings = forwardRef(function LaptopSettings(
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
      createElement(Circle, {"cx":"16.999999999461579","cy":"7.032754075942648","r":"3.5","key":"0"}),
      createElement(Line, {"x1":"16.999999999461579","y1":"7.042754075942867","x2":"16.999999999461579","y2":"7.032754075942648","key":"1"}),
      createElement(Line, {"x1":"16.999999999461579","y1":"2.032754075942648","x2":"16.999999999461579","y2":"3.532754075942648","key":"2"}),
      createElement(Line, {"x1":"16.999999999461579","y1":"10.532754075942648","x2":"16.999999999461579","y2":"12.032754075942648","key":"3"}),
      createElement(Line, {"x1":"21.999999999461579","y1":"7.032754075942648","x2":"20.499999999461579","y2":"7.032754075942648","key":"4"}),
      createElement(Line, {"x1":"13.499999999461579","y1":"7.032754075942648","x2":"11.999999999461579","y2":"7.032754075942648","key":"5"}),
      createElement(Line, {"x1":"20.53553390547313","y1":"10.568287981794128","x2":"19.474873733670393","y2":"9.507627810042322","key":"6"}),
      createElement(Line, {"x1":"14.525126265252766","y1":"4.557880341842974","x2":"13.464466093450028","y2":"3.497220170083892","key":"7"}),
      createElement(Line, {"x1":"13.464466093610099","y1":"10.568287981954199","x2":"14.525126265365543","y2":"9.5076278101551","key":"8"}),
      createElement(Line, {"x1":"19.474873733559434","y1":"4.557880341733835","x2":"20.535533905316697","y2":"3.497220169934735","key":"9"})),
    createElement(Path, {"d":"M21.999999999461579,20.335529713673168v1.69722436226948H1.999999999461579v-1.69722436226948c0-.197424985479302.058438027475859-.390432678937941.167949705661158-.554700196218619l1.832050294338842-2.748075441511901h16l1.832050294338842,2.748075441511901c.109511678187118.164267517280678.167949705661158.357275210739317.167949705661158.554700196218619Z","key":"1"}),
    createElement(Path, {"d":"M3.999999999461579,17.032754075942648V7.032754075942648c0-.552284749828686.447715250171314-1,1-1h4","key":"2"}),
    createElement(Line, {"x1":"19.999999999461579","y1":"14.032754075942648","x2":"19.999999999461579","y2":"17.032754075942648","key":"3"})
  );
});

LaptopSettings.displayName = 'LaptopSettings';

module.exports = LaptopSettings;
module.exports.LaptopSettings = LaptopSettings;
module.exports.default = LaptopSettings;

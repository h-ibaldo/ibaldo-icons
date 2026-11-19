'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const DownloadSquareDashed = forwardRef(function DownloadSquareDashed(
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
    createElement(Path, {"d":"M3.974731450025502,2.000000001537956h-.000002000000677c-1.104568388793268,0-1.999997999999323.895429611205145-1.999997999999323,1.999997999999323v.000002000000677","key":"0"}),
    createElement(Line, {"x1":"1.974731450025502","y1":"8.000000001537956","x2":"1.974731450025502","y2":"10.000000001537956","key":"1"}),
    createElement(Line, {"x1":"1.974731450025502","y1":"14.000000001537956","x2":"1.974731450025502","y2":"16.000000001537956","key":"2"}),
    createElement(Path, {"d":"M1.974731450025502,20.000000001537956v.000002000000677c0,1.104568388793268.895429611206055,1.999997999999323,1.999997999999323,1.999997999999323h.000002000000677","key":"3"}),
    createElement(Path, {"d":"M19.974731450025502,22.000000001537956h.000002000000677c1.104568388795087,0,1.999997999999323-.895429611206055,1.999997999999323-1.999997999999323v-.000002000000677","key":"4"}),
    createElement(Line, {"x1":"21.974731450025502","y1":"16.000000001537956","x2":"21.974731450025502","y2":"14.000000001537956","key":"5"}),
    createElement(Line, {"x1":"21.974731450025502","y1":"10.000000001537956","x2":"21.974731450025502","y2":"8.000000001537956","key":"6"}),
    createElement(Line, {"x1":"15.974731450025502","y1":"2.000000001537956","x2":"13.974731450025502","y2":"2.000000001446097","key":"7"}),
    createElement(Line, {"x1":"9.974731450025502","y1":"2.000000001268745","x2":"7.974731450025502","y2":"2.000000001179615","key":"8"}),
    createElement(Line, {"x1":"15.974731450025502","y1":"22.000000001537956","x2":"13.974731450025502","y2":"22.000000001446097","key":"9"}),
    createElement(Line, {"x1":"9.974731450025502","y1":"22.000000001268745","x2":"7.974731450025502","y2":"22.000000001179615","key":"10"}),
    createElement(Path, {"d":"M21.974731450025502,4.000000001537956v-.000002000000677c0-1.104568388794178-.895429611204236-1.999997999999323-1.999997999999323-1.999997999999323h-.000002000000677","key":"11"}),
    createElement(Polyline, {"points":"14.974731449661704 13.000000001807166 11.974731448721286 16.000000001537956 8.974731449661704 13.000000001268745","key":"12"}),
    createElement(Line, {"x1":"11.974731451276966","y1":"8.000000001537956","x2":"11.974731448721286","y2":"16.000000001537956","key":"13"})
  );
});

DownloadSquareDashed.displayName = 'DownloadSquareDashed';

module.exports = DownloadSquareDashed;
module.exports.DownloadSquareDashed = DownloadSquareDashed;
module.exports.default = DownloadSquareDashed;

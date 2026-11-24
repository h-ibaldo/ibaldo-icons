'use strict';

const { createElement, forwardRef } = require('react');

const DownloadCircleFlat = forwardRef(function DownloadCircleFlat(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('polyline', {"points":"14.97473145002914 8.000000000462023 11.974731449356113 11.000000000462023 8.97473145002914 8.000000000462023","key":"0"}),
    createElement('line', {"x1":"11.974731451105981","y1":"2.000000000462023","x2":"11.974731449356113","y2":"11.000000000462023","key":"1"}),
    createElement('line', {"x1":"7.97473145002914","y1":"15.000000000462023","x2":"15.97473145002914","y2":"15.000000000462023","key":"2"}),
    createElement('path', {"d":"M4.83905029768539,5.000000000462023c-1.7698974609375,1.804016113280341-2.86431884765625,4.273132324217841-2.86431884765625,7,0,5.522827148436591,4.4771728515625,10.000000000000909,10,10.000000000000909s10-4.477172851564319,10-10.000000000000909c0-2.726867675782159-1.09442138671875-5.195983886719659-2.86431884765625-7","key":"3"})
  );
});

DownloadCircleFlat.displayName = 'DownloadCircleFlat';

module.exports = DownloadCircleFlat;
module.exports.DownloadCircleFlat = DownloadCircleFlat;
module.exports.default = DownloadCircleFlat;

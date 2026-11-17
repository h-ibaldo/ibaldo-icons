'use strict';

const { createElement, forwardRef } = require('react');

const DownloadArrowCircle = forwardRef(function DownloadArrowCircle(
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
    createElement('path', {"d":"M7.167022709788398,20.645751953587933c1.423095703132276.778625488279431,3.055480957043983,1.222473144529431,4.792053222659888,1.222473144529431,1.9459228515625,0,3.755920410160797-.564697265625,5.2921142578125-1.526245117186591","key":"0"}),
    createElement('path', {"d":"M1.990386967609084,12.487670898898614c.117858886723297,1.91778564453125.770751953121362,3.68731689453125,1.819152832030341,5.162353515625","key":"1"}),
    createElement('path', {"d":"M20.432830815260786,17.160339355929864c.961547851571595-1.53619384765625,1.5262451171875-3.34619140625,1.5262451171875-5.2921142578125,0-4.74798583984375-3.3123779296875-8.7144775390625-7.75-9.7364501953125","key":"2"}),
    createElement('path', {"d":"M9.709075932448286,2.131774902804864c-.5736083984375.132080078125-1.131286621089203.30584716796875-1.6624755859375.53192138671875","key":"3"}),
    createElement('path', {"d":"M4.414031987139424,5.318603516087023c-.70184326171875.807739257811591-1.279724121101026,1.724792480467841-1.6953125,2.728637695311591","key":"4"}),
    createElement('polyline', {"points":"14.974731450030959 13.000000000462023 11.974731449357932 16.000000000462023 8.974731450030959 13.000000000462023","key":"5"}),
    createElement('line', {"x1":"11.9747314511078","y1":"8.000000000462023","x2":"11.974731449357932","y2":"16.000000000462023","key":"6"})
  );
});

DownloadArrowCircle.displayName = 'DownloadArrowCircle';

module.exports = DownloadArrowCircle;
module.exports.DownloadArrowCircle = DownloadArrowCircle;
module.exports.default = DownloadArrowCircle;

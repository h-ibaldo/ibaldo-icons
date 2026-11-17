'use strict';

const { createElement, forwardRef } = require('react');

const DesktopDownload1 = forwardRef(function DesktopDownload1(
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
    createElement('path', {"d":"M16.974731450033687,2.000000000456566h2c1.656854249491516,0,3,1.343145750509393,3,3v14c0,1.656854249496064-1.343145750508484,3.000000000001819-3,3.000000000001819H4.974731450033687c-1.656854249491516,0-3-1.343145750505755-3-3.000000000001819V5.000000000456566c0-1.656854249490607,1.343145750508484-3,3-3l2,.000000000002728","key":"0"}),
    createElement('polyline', {"points":"14.974731450033687 8.000000000459295 11.974731449360661 11.000000000459295 8.974731450033687 8.000000000459295","key":"1"}),
    createElement('line', {"x1":"11.974731450033687","y1":"2.000000000459295","x2":"11.974731449360661","y2":"11.000000000459295","key":"2"}),
    createElement('rect', {"x":"5.974731450033687","y":"17.000000000459295","width":"2","height":"1","key":"3"}),
    createElement('rect', {"x":"10.974731450033687","y":"17.000000000459295","width":"2","height":"1","key":"4"}),
    createElement('rect', {"x":"15.974731450033687","y":"17.000000000459295","width":"2","height":"1","key":"5"})
  );
});

DesktopDownload1.displayName = 'DesktopDownload1';

module.exports = DesktopDownload1;
module.exports.DesktopDownload1 = DesktopDownload1;
module.exports.default = DesktopDownload1;

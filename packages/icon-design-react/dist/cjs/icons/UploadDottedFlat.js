'use strict';

const { createElement, forwardRef } = require('react');

const UploadDottedFlat = forwardRef(function UploadDottedFlat(
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
    createElement('polyline', {"points":"6.974731450032778 6.999999999788997 11.974731450705804 2.000000000462023 16.974731450032778 7.000000001135959","key":"0"}),
    createElement('line', {"x1":"11.974731448955936","y1":"9.000000000462023","x2":"11.974731450705804","y2":"2.000000000462023","key":"1"}),
    createElement('line', {"x1":"11.974731448955936","y1":"13.010000000462242","x2":"11.974731448955936","y2":"13.000000000462023","key":"2"}),
    createElement('line', {"x1":"11.974731448955936","y1":"17.010000000462242","x2":"11.974731448955936","y2":"17.000000000462023","key":"3"}),
    createElement('line', {"x1":"2.974731450032778","y1":"22.000000000462933","x2":"20.974731450032778","y2":"22.000000000462933","key":"4"})
  );
});

UploadDottedFlat.displayName = 'UploadDottedFlat';

module.exports = UploadDottedFlat;
module.exports.UploadDottedFlat = UploadDottedFlat;
module.exports.default = UploadDottedFlat;

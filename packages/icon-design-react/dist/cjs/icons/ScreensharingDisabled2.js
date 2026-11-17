'use strict';

const { createElement, forwardRef } = require('react');

const ScreensharingDisabled2 = forwardRef(function ScreensharingDisabled2(
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
    createElement('rect', {"x":"1.974731440099276","y":"2.000000003885361","width":"10","height":"6","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"4.974731440099276","y1":"11.000000003885361","x2":"8.974731440099276","y2":"11.000000003885361","key":"1"}),
    createElement('rect', {"x":"11.974731440099276","y":"13.000000003885361","width":"10","height":"6","rx":"1","ry":"1","key":"2"}),
    createElement('line', {"x1":"14.974731440099276","y1":"22.000000003885361","x2":"18.974731440099276","y2":"22.000000003885361","key":"3"}),
    createElement('line', {"x1":"21.974731440099276","y1":"2.000000003885361","x2":"16.974731440099276","y2":"7.000000003885361","key":"4"}),
    createElement('line', {"x1":"16.974731440099276","y1":"2.000000003954483","x2":"21.974731440170217","y2":"7.000000003885361","key":"5"}),
    createElement('line', {"x1":"6.974731440099276","y1":"17.000000003885361","x2":"1.974731440099276","y2":"22.000000003885361","key":"6"}),
    createElement('line', {"x1":"1.974731440099276","y1":"17.000000003954483","x2":"6.974731440170217","y2":"22.000000003885361","key":"7"})
  );
});

ScreensharingDisabled2.displayName = 'ScreensharingDisabled2';

module.exports = ScreensharingDisabled2;
module.exports.ScreensharingDisabled2 = ScreensharingDisabled2;
module.exports.default = ScreensharingDisabled2;

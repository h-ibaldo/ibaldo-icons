'use strict';

const { createElement, forwardRef } = require('react');

const PageViewPictureInPicture1 = forwardRef(function PageViewPictureInPicture1(
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
    createElement('rect', {"x":"1.999999993601705","y":"2.998779299956368","width":"20","height":"18","rx":".999999999993015","ry":".999999999993015","transform":"translate(23.99999998666507 23.997558600451129) rotate(-180)","key":"0"}),
    createElement('rect', {"x":"9.999999994692189","y":"6.998779300069145","width":"7.999999998810381","height":"5.999999998679414","transform":"translate(27.999999987821912 19.997558599339754) rotate(-180)","key":"1"})
  );
});

PageViewPictureInPicture1.displayName = 'PageViewPictureInPicture1';

module.exports = PageViewPictureInPicture1;
module.exports.PageViewPictureInPicture1 = PageViewPictureInPicture1;
module.exports.default = PageViewPictureInPicture1;

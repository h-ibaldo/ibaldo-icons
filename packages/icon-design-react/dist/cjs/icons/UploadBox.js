'use strict';

const { createElement, forwardRef } = require('react');

const UploadBox = forwardRef(function UploadBox(
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
    createElement('rect', {"x":"1.97473147673918","y":"7.000000026766429","width":"20","height":"15","rx":"2","ry":"2","key":"0"}),
    createElement('path', {"d":"M1.97473147673918,9.000000026766429v-.338096210310141c0-1.087463676366497.295547000030638-2.154482123111848.855042445720755-3.086974532565364l1.562352460779948-2.603920767980526c.361446492930554-.602410821546073,1.0124601471598-.971008489143969,1.714985851420352-.971008489143969h11.7352384841397c.702525704269647,0,1.353539358489797.368597667599715,1.714985851409438.971008489143969l1.562352460790862,2.603920767982345c.559495445679204.932492409452607.855042445738945,1.999510856200686.855042445738945,3.086974532566273v.338096210307413","key":"1"}),
    createElement('polyline', {"points":"14.974731450030959 14.000000000459295 11.974731477039313 11.000000026767339 8.974731450030959 14.000000000459295","key":"2"}),
    createElement('line', {"x1":"11.974731476409943","y1":"18.000000026767339","x2":"11.974731477039313","y2":"11.000000026767339","key":"3"})
  );
});

UploadBox.displayName = 'UploadBox';

module.exports = UploadBox;
module.exports.UploadBox = UploadBox;
module.exports.default = UploadBox;

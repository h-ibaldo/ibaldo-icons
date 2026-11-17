'use strict';

const { createElement, forwardRef } = require('react');

const NewspaperPhoto = forwardRef(function NewspaperPhoto(
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
    createElement('path', {"d":"M17.999988017745636,17.936828613277612V1.936828613277612H1.999988017745636v17c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3V6.936828613277612","key":"0"}),
    createElement('rect', {"x":"5.999988017745636","y":"5.936828613277612","width":"4","height":"4","key":"1"}),
    createElement('line', {"x1":"12.999988017745636","y1":"5.936828613277612","x2":"13.999988017745636","y2":"5.936828613277612","key":"2"}),
    createElement('line', {"x1":"5.999988017745636","y1":"13.936828613277612","x2":"13.999988017745636","y2":"13.936828613277612","key":"3"}),
    createElement('line', {"x1":"5.999988017745636","y1":"17.936828613277612","x2":"13.999988017745636","y2":"17.936828613277612","key":"4"}),
    createElement('line', {"x1":"12.999988017745636","y1":"9.936828613277612","x2":"13.999988017745636","y2":"9.936828613277612","key":"5"})
  );
});

NewspaperPhoto.displayName = 'NewspaperPhoto';

module.exports = NewspaperPhoto;
module.exports.NewspaperPhoto = NewspaperPhoto;
module.exports.default = NewspaperPhoto;

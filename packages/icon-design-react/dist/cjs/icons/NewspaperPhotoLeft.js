'use strict';

const { createElement, forwardRef } = require('react');

const NewspaperPhotoLeft = forwardRef(function NewspaperPhotoLeft(
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
    createElement('path', {"d":"M4.999988017749274,3.936828613277612h17v15c0,.552284749830505-.447715250169495,1-1,1H3.499988017749274","key":"0"}),
    createElement('path', {"d":"M4.999988017749274,5.936828613277612H1.999988017749274v12.500001500000508c0,.828426296320686.671572203671531,1.499998499999492,1.499998500001311,1.499998499999492h.000002999999197c.828426296320686,0,1.499998499999492-.671572203678807,1.499998499999492-1.499998499999492V3.936828613277612","key":"1"}),
    createElement('rect', {"x":"7.999988017749274","y":"7.936828613277612","width":"4","height":"4","key":"2"}),
    createElement('line', {"x1":"14.999988017749274","y1":"7.936828613277612","x2":"18.999988017749274","y2":"7.936828613277612","key":"3"}),
    createElement('line', {"x1":"14.999988017749274","y1":"11.936828613277612","x2":"18.999988017749274","y2":"11.936828613277612","key":"4"}),
    createElement('line', {"x1":"14.999988017749274","y1":"15.936828613277612","x2":"18.999988017749274","y2":"15.936828613277612","key":"5"}),
    createElement('line', {"x1":"7.999988017749274","y1":"15.936828613277612","x2":"11.999988017749274","y2":"15.936828613277612","key":"6"})
  );
});

NewspaperPhotoLeft.displayName = 'NewspaperPhotoLeft';

module.exports = NewspaperPhotoLeft;
module.exports.NewspaperPhotoLeft = NewspaperPhotoLeft;
module.exports.default = NewspaperPhotoLeft;

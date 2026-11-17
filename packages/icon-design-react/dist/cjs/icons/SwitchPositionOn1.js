'use strict';

const { createElement, forwardRef } = require('react');

const SwitchPositionOn1 = forwardRef(function SwitchPositionOn1(
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
    createElement('circle', {"cx":"11.974731413636164","cy":"15.998779298523914","r":"6.000000000000682","key":"0"}),
    createElement('line', {"x1":"16.217372100765715","y1":"11.756138611421193","x2":"12.681838194845113","y2":"15.291672517352708","key":"1"}),
    createElement('rect', {"x":"1.974738038148786","y":"1.9987792977455","width":"4.000000003485354","height":"5.999999999998408","rx":"1.999998005051629","ry":"1.999998005051629","key":"2"}),
    createElement('line', {"x1":"19.974731413605696","y1":"1.998779298537556","x2":"19.974731413605696","y2":"7.998779298537556","key":"3"})
  );
});

SwitchPositionOn1.displayName = 'SwitchPositionOn1';

module.exports = SwitchPositionOn1;
module.exports.SwitchPositionOn1 = SwitchPositionOn1;
module.exports.default = SwitchPositionOn1;

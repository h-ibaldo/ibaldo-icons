'use strict';

const { createElement, forwardRef } = require('react');

const HeartStripedAngular = forwardRef(function HeartStripedAngular(
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
    createElement('line', {"x1":"8.68899536698973","y1":"3.836151123658965","x2":"2.361297613079842","y2":"10.163848877564305","key":"0"}),
    createElement('line', {"x1":"4.025177007610182","y1":"12.499969483033965","x2":"11.025115972460299","y2":"5.499969483033965","key":"1"}),
    createElement('line', {"x1":"6.025177007610182","y1":"14.499969483033965","x2":"16.999969488079842","y2":"3.525115967408965","key":"2"}),
    createElement('line', {"x1":"8.025177007610182","y1":"16.499969483033965","x2":"19.977264409960299","y2":"4.547882080690215","key":"3"}),
    createElement('line', {"x1":"10.025115972460299","y1":"18.499969483033965","x2":"21.661712652139613","y2":"6.863433838505443","key":"4"}),
    createElement('path', {"d":"M20.500000005659786,4.974884033815215c-1.932983398440228-1.932983398434772-5.067016601559772-1.932983398434772-7,0l-1.5,1.5-1.5-1.5c-1.932983398440228-1.932983398434772-5.067016601559772-1.932983398434772-7,0-1.932983398440228,1.932983398440228-1.932983398440228,5.067016601565228,0,6.999999999999091l8.5,8.5,8.5-8.5c1.932983398440228-1.932983398433862,1.932983398440228-5.067016601558862,0-6.999999999999091Z","key":"5"})
  );
});

HeartStripedAngular.displayName = 'HeartStripedAngular';

module.exports = HeartStripedAngular;
module.exports.HeartStripedAngular = HeartStripedAngular;
module.exports.default = HeartStripedAngular;

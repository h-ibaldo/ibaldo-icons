'use strict';

const { createElement, forwardRef } = require('react');

const LinkPersonalHotspotX = forwardRef(function LinkPersonalHotspotX(
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
    createElement('path', {"d":"M3.684982303990182,8.261688232902088c-1.040466308590112.916259765625-1.710266113270336,2.24298095703125-1.710266113270336,3.73834228515625,0,2.76141357421875,2.238586425770336,5,5,5h5c2.761413574209655,0,5-2.23858642578125,5-5s-2.238586425790345-5-5-5h-1","key":"0"}),
    createElement('path', {"d":"M20.264450077100264,10.738372803865786c1.040466308670148-.916259765530413,1.71026611347952-2.242980956874817,1.710266113619582-3.738342284999817.000000000240107-2.761413574219659-2.238586425330141-5.000000000202817-4.999999999559805-5.0000000004502l-5-.000000000448381c-2.761413574220569-.000000000247383-5.000000000200089,2.238586425330141-5.000000000440195,4.999999999548891-.000000000260115,2.761413574219659,2.238586425321046,5.000000000203727,4.999999999539796,5.000000000451109l1,.000000000090949","key":"1"}),
    createElement('line', {"x1":"17.974731449410683","y1":"22.000000000480213","x2":"21.974731449410683","y2":"18.000000000480213","key":"2"}),
    createElement('line', {"x1":"17.974731449319734","y1":"18.000000000567525","x2":"21.974731449499814","y2":"22.000000000389264","key":"3"})
  );
});

LinkPersonalHotspotX.displayName = 'LinkPersonalHotspotX';

module.exports = LinkPersonalHotspotX;
module.exports.LinkPersonalHotspotX = LinkPersonalHotspotX;
module.exports.default = LinkPersonalHotspotX;

'use strict';

const { createElement, forwardRef } = require('react');

const BookmarkThreeRound = forwardRef(function BookmarkThreeRound(
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
    createElement('path', {"d":"M16.000000026695488,1.999999999998181h-8c-1.656854249493335,0-3,1.343145750509393-3,3v17l7-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750506665-3-3-3Z","key":"0"}),
    createElement('path', {"d":"M10.000000026695488,6.999999999998181h4l-2,3,.84360230643324.421801153219349c.70871690353124.354358451761073,1.15639769356676,1.078721186149778,1.15639769356676,1.871090772700882v.000001999999768c0,.452752415530995-.179855196776771.886961270860411-.499999499999831,1.207105574079833l-.000001000000339.000001000000339c-.32014430322306.320144303219422-.7543531585452.499999499999831-1.207105574079833.499999499999831h-.000001999998858c-.827824797357607,0-1.621744046235108-.32885212031033-2.207104574081313-.914212648160174l-.085787351839826-.085787351839826","key":"1"})
  );
});

BookmarkThreeRound.displayName = 'BookmarkThreeRound';

module.exports = BookmarkThreeRound;
module.exports.BookmarkThreeRound = BookmarkThreeRound;
module.exports.default = BookmarkThreeRound;

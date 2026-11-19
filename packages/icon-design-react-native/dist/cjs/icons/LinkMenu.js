'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const LinkMenu = forwardRef(function LinkMenu(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M3.684997562779245,13.261657715320325c-1.040466308588293.916259765630457-1.710266113279431,2.242980957038526-1.710266113279431,3.738342285159888,0,2.761413574220569,2.238586425779431,5,5,5h5c2.761413574220569,0,5-2.238586425779431,5-5,0-2.761413574222388-2.238586425779431-5-5-5h-1","key":"0"}),
    createElement(Path, {"d":"M20.264465335889327,15.738342286287661c1.040466308670148-.916259765526775,1.710266113481339-2.242980956878455,1.710266113610487-3.738342284999817.000000000260115-2.76141357421875-2.238586425330141-5.000000000200089-4.999999999548891-5.000000000447471l-5-.000000000451109c-2.761413574220569-.000000000251021-5.000000000190994,2.238586425330141-5.000000000451109,4.999999999548891-.000000000249202,2.761413574222388,2.238586425330141,5.000000000200089,4.99999999955071,5.000000000451109l1,.000000000090949","key":"1"}),
    createElement(Line, {"x1":"1.974731449499814","y1":"2.000000000479304","x2":"6.974731449499814","y2":"2.000000000479304","key":"2"}),
    createElement(Line, {"x1":"1.974731449499814","y1":"5.000000000479304","x2":"6.974731449499814","y2":"5.000000000479304","key":"3"}),
    createElement(Line, {"x1":"1.974731449499814","y1":"8.000000000480213","x2":"3.974731449499814","y2":"8.000000000480213","key":"4"})
  );
});

LinkMenu.displayName = 'LinkMenu';

module.exports = LinkMenu;
module.exports.LinkMenu = LinkMenu;
module.exports.default = LinkMenu;

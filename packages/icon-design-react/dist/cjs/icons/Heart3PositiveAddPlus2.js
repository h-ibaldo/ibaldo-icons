"use strict";

const { forwardRef } = require('react');

const Heart3PositiveAddPlus2 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="14.974731449499814" y1="18.000000000480213" x2="20.974731449499814" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731449499814" y1="15.000000000480213" x2="17.974731449499814" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.057250980749814,12.000000000480213c.131103515620453-.2039794921875.256713867190228-.40692138671875.359252929690228-.6044921875.951293945309772-1.902587890625.669677734370453-4.19000244140625-.714599609379547-5.805053710936591-2.004272460940228-2.338256835939319-5.574890136720569-2.475402832032159-7.752502441400793-.297729492189319l-.963012695319776.963012695314319-.000061035149884.02783203125-.023254394530341-.02783203125-.963012695319776-.963012695314319c-2.177612304680224-2.177673339842841-5.748229980469659-2.04052734375-7.752502441399884.297729492189319-1.38427734375,1.615051269530341-1.665893554690228,3.902465820311591-.714599609379547,5.805053710936591,1.9521484375,3.7620849609375,9.430114746099207,8.8602294921875,9.430114746099207,8.8602294921875l.011657714840112-.01861572265625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Heart3PositiveAddPlus2.displayName = 'Heart3PositiveAddPlus2';

module.exports = Heart3PositiveAddPlus2;
module.exports.Heart3PositiveAddPlus2 = Heart3PositiveAddPlus2;
module.exports.default = Heart3PositiveAddPlus2;

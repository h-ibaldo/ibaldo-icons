"use strict";

const { forwardRef } = require('react');

const HandTouchTwoFingersSwipeUpAndDownArrow = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M13.999999998310159,7.999389648080069l-.000183049529369-1.49972687596528c-.000101128680399-.828548344372393.671541668460122-1.50027312403472,1.50009001899889-1.50027312403472h.00000300037027c.828476847049387,0,1.500090030180218.671613183141744,1.500090030180218,1.500090030187494l-.000000000020009,5.357026669031256,2.54938516430957.728378322979552c.858635769929606.245318632474664,1.45061483569043,1.030117868311208,1.45061483569043,1.923110934832948v7.49200439453125l-10.000427246099207-.0006103515625-5.114624023430224-5.96746826171875c-.49932861328125-.5826416015625-.465942382819776-1.4515380859375.07666015625-1.994140625.573486328119543-.573486328125,1.503295898430224-.573486328125,2.07684326171875,0l2.961547851560681,2.96160888671875-.000000000020009-9.500337178396876c-.000000000010914-.828557360172454.67177676808933-1.500183836946235,1.500334107520757-1.499998449598934l.000003003478923.000000000673026c.828295215909748.000185328700354,1.499662889020328.671703235228051,1.499662889020328,1.499998471862455v3.500337155460329" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.999999998310159 7.999389648080069 4.999999998310159 9.999389648080069 6.999999998310159 7.999389648080069" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999998310159 3.999389648080069 4.999999998310159 1.999389648080069 2.999999998310159 3.999389648080069" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.999999998310159" y1="1.999389648080069" x2="4.999999998310159" y2="9.999389648080069" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

HandTouchTwoFingersSwipeUpAndDownArrow.displayName = 'HandTouchTwoFingersSwipeUpAndDownArrow';

module.exports = HandTouchTwoFingersSwipeUpAndDownArrow;
module.exports.HandTouchTwoFingersSwipeUpAndDownArrow = HandTouchTwoFingersSwipeUpAndDownArrow;
module.exports.default = HandTouchTwoFingersSwipeUpAndDownArrow;

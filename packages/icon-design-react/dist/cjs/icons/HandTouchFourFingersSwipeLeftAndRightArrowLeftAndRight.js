"use strict";

const { forwardRef } = require('react');

const HandTouchFourFingersSwipeLeftAndRightArrowLeftAndRight = forwardRef(({
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
    viewBox: "0 0 24 24.000000000001819",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="17.025268548610256" y1="3.997562036609452" x2="22.025268548610256" y2="3.997562036383897" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="20.025268548520216 1.997562036474847 22.025268548610256 3.997562036383897 20.025268548700296 5.997562036474847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.025268548610256" y1="3.997562036474847" x2="2.025268548610256" y2="3.997562036474847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="4.025268548610256 1.997562036474847 2.025268548610256 3.997562036474847 4.025268548610256 5.997562036474847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.025268548610256,21.997562036474847v-11.5006103515625c0-.82843017578125-.671569824220569-1.5-1.5-1.5-.828430175780341,0-1.5.67156982421875-1.5,1.5v-1.9993896484375c0-.82843017578125-.671569824220569-1.5-1.5-1.5-.828430175780341,0-1.5.67156982421875-1.5,1.5v-1c0-.82843017578125-.671569824220569-1.5-1.5-1.5h-.000061035159888c-.828552246090112,0-1.500183105470569.6717529296875-1.5,1.500244140625l.000061035159888.906982421875c-.0283203125-.78118896484375-.666076660159888-1.40740966796875-1.454467773440228-1.4075927734375h-.037902832030341c-.838562011719659-.00018310546875-1.51220703125.669921875-1.51123046875,1.5010986328125.003601074220569,3.01055908203125.003601074220569,9.499267578125.003601074220569,9.499267578125l-2.961547851560681-2.96160888671875c-.573547363289435-.573486328125-1.503356933599207-.573486328125-2.076843261719659,0-.542602539069776.5426025390625-.575988769530341,1.4114990234375-.07666015625,1.994140625l4.257568359370453,4.96746826171875h12.857482910159888ZM14.025268548610256,7.997562036474847v5M11.025268548610256,11.997562036474847v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.025268548610256" y1="9.997562036474847" x2="17.025268548610256" y2="13.997562036474847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

HandTouchFourFingersSwipeLeftAndRightArrowLeftAndRight.displayName = 'HandTouchFourFingersSwipeLeftAndRightArrowLeftAndRight';

module.exports = HandTouchFourFingersSwipeLeftAndRightArrowLeftAndRight;
module.exports.HandTouchFourFingersSwipeLeftAndRightArrowLeftAndRight = HandTouchFourFingersSwipeLeftAndRightArrowLeftAndRight;
module.exports.default = HandTouchFourFingersSwipeLeftAndRightArrowLeftAndRight;

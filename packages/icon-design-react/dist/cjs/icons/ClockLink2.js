"use strict";

const { forwardRef } = require('react');

const ClockLink2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999999810825" y1="18.999999999887223" x2="9.999999999810825" y2="18.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.999999999810825,21.999999999887223h-1.000003000010111c-1.656852592630457,0-2.999996999989889-1.343144407368527-2.999996999989889-2.999996999998984v-.000006000000212c0-1.656852592650466,1.343144407359432-2.999997000000803,2.999996999989889-2.999997000000803h1.000003000010111" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.000000000069122,15.999999999708962l1.000003000010111.00000000008913c1.656852592630457.000000000150976,2.999996999869836,1.343144407621367,2.999996999731593,2.999997000270014v.000006000000212c-.000000000150976,1.656852592628638-1.343144407641375,2.99999699988075-2.999997000271833,2.999996999729774l-1.000002999999197-.00000000008913" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18,19.986328124887223c2.424865722659888-1.82470703125,4-4.717895507808862,4-7.986328125,0-5.522827148439319-4.477111816409888-10-10-10C6.477172851560681,1.999999999887223,2,6.477172851447904,2,11.999999999887223c0,.337646484371362.017822265630457.671020507810681.050476074220569,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ClockLink2.displayName = 'ClockLink2';

module.exports = ClockLink2;
module.exports.ClockLink2 = ClockLink2;
module.exports.default = ClockLink2;

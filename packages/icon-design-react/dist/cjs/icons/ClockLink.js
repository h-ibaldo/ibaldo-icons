"use strict";

const { forwardRef } = require('react');

const ClockLink = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<g>
  <path d="M3.500000000380169,17.500000000518412l-.67157714781024-.67159376969903c-1.104563802600751-1.104563802000484-1.104563805400176-2.895415571510966-.000000001069566-3.999979376430929l.00000399999044-.000004000010449c1.104570296218299-1.104570296800375,2.895434884059796-1.104562854630785,3.999995999869498.000016622489056l.671577147950302.671560522561776" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.499999999439751,16.499999999727152l.671577147699281.671593769809988c1.104563802500707,1.104563802091434,1.10456380514006,2.895415571611011.00000000072032,3.999979376430929l-.000003999999535.000003999999535c-1.104570296309248,1.104570296691236-2.895434884148926,1.104562854379765-3.999995999860403-.000016622849216l-.671577147839344-.671560522670916" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999999599822" y1="16.000000000218279" x2="7.999999999869033" y2="17.999999999958163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15,21.540771484258585c4.056884765630457-1.2744140625,7-5.063354492180224,7-9.540771484371362,0-5.522827148439319-4.477111816409888-10-10-10C7.522583007810681,1.999999999887223,3.733703613279431,4.943115234258585,2.459228515630457,8.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ClockLink.displayName = 'ClockLink';

module.exports = ClockLink;
module.exports.ClockLink = ClockLink;
module.exports.default = ClockLink;

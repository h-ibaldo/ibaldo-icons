"use strict";

const { forwardRef } = require('react');

const LockArrowPortrait1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="19.974731448959574 3.000000000479304 19.974731449139654 6.000000000119144 16.974731449499814 6.000000000299224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.961120609299542,6.000000000119144c-1.824768066509932-2.424804687414507-4.71795654314883-3.999999999787178-7.986389160339968-3.99999999963984-5.522827148430224.000000000247383-9.999999999788997,4.4771728520127-9.999999999548891,10.000000000448381.000000000249202,5.52288818359375,4.477172852009971,9.999999999799911,10.00000000044929,9.999999999552529s9.999999999799911-4.477111816857359,9.99999999955071-10.000000000451109c-.000000000030923-.68499755859375-.069641113341277-1.353698730465112-.200866699311518-1.999999999988177" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="7.974731449499814" y="12.000000000480213" width="8" height="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.974731449499814,12.000000000480213v-2.000003000001016c0-1.656852592637733,1.343144407359432-2.999996999998984,2.999997000000803-2.999996999998984h.000006000009307c1.656852592630457,0,2.999996999989889,1.343144407361251,2.999996999989889,2.999996999998984v2.000003000001016" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LockArrowPortrait1.displayName = 'LockArrowPortrait1';

module.exports = LockArrowPortrait1;
module.exports.LockArrowPortrait1 = LockArrowPortrait1;
module.exports.default = LockArrowPortrait1;

"use strict";

const { forwardRef } = require('react');

const LockArrowPortrait3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="19.949462886642323 1.999999973806553 19.949462886824222 5.999999973806553 15.949462886824222 5.999999973984814" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.935852046982291,5.999999973806553c-1.824768066519937-2.424804687419964-4.717956543150649-3.999999999788997-7.986389160339968-3.999999999643478-5.522827148441138.000000000251021-9.999999999799002,4.477172852013609-9.99999999955071,10.000000000451109.000000000251021,5.52288818359375,4.477172852010881,9.999999999799911,10.0000000004502,9.999999999548891,5.522827148441138-.000000000247383,9.999999999800821-4.477111816853721,9.9999999995498-10.000000000447471-.000000000028194-.68499755859375-.069641113340367-1.353698730465112-.20086669930879-1.999999999992724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="7.949462893872806" y="12.000000000480213" width="7.999999982539521" height="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.949462876412326,12.000000000480213v-3.000001994521881c0-1.104568398117408-.895429607360711-1.999998005478119-1.999998005478119-1.999998005478119h-.000004000001354c-1.104568399980053,0-1.999998008110197.895429610263818-1.999998005479938,1.999998010240233l.000000007150447,3.000001989759767" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LockArrowPortrait3.displayName = 'LockArrowPortrait3';

module.exports = LockArrowPortrait3;
module.exports.LockArrowPortrait3 = LockArrowPortrait3;
module.exports.default = LockArrowPortrait3;

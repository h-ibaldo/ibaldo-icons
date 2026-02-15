"use strict";

const { forwardRef } = require('react');

const SignalWaveSemiCirclesConcentric2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.499999971900252" cy="12.499996564601133" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.333862276589571,20.667721173976133c2.789978027340112-1.65496826171875,4.666137695310681-4.68853759765625,4.666137695310681-8.167724609375,0-5.246704101563409-4.253295898441138-9.5-9.5-9.5C6.253295870339571,2.999996564601133,1.999999971900252,7.253292463037724,1.999999971900252,12.499996564601133c0,3.47918701171875,1.87615966796875,6.51275634765625,4.666137695308862,8.167724609375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.989013643769795,17.978084943507383c1.808349609380457-1.154235839844659,3.010986328130457-3.17364501953125,3.010986328130457-5.47808837890625,0-3.58984375-2.91015625-6.5-6.5-6.5s-6.5,2.91015625-6.5,6.5c0,2.304443359375,1.20263671875,4.323852539061591,3.010986328119543,5.47808837890625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.629760714089571,15.259518048976133c.827941894529431-.64013671875,1.370239257810681-1.632080078125,1.370239257810681-2.759521484375,0-1.932983398438409-1.567016601560681-3.5-3.5-3.5-1.932983398441138,0-3.5,1.567016601561591-3.5,3.5,0,1.12744140625.542297363279431,2.119384765625,1.370239257808862,2.759521484375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SignalWaveSemiCirclesConcentric2.displayName = 'SignalWaveSemiCirclesConcentric2';

module.exports = SignalWaveSemiCirclesConcentric2;
module.exports.SignalWaveSemiCirclesConcentric2 = SignalWaveSemiCirclesConcentric2;
module.exports.default = SignalWaveSemiCirclesConcentric2;

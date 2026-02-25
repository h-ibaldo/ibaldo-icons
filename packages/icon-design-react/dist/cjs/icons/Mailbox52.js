"use strict";

const { forwardRef } = require('react');

const Mailbox52 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="16.945392090099631 11.999999999998181 16.945392090279711 2.999999999909051 21.945392090279711 2.999999999998181 21.945392090229689 6.999999999998181 16.945392090229689 6.999999999909051" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.445387592652829,7.000000000282796h.000008993869631c2.483615132292868,0,4.499995510304987,2.016380378012121,4.499995510304987,4.499995510304988v9.500004489410454H2.945392079048355c-.551915024157838,0-.999999999390917-.44808497523308-.999999999390917-.999999999390916v-8.500004487329136c0-2.483615133777741,2.01638037921765-4.49999551299539,4.499995512995391-4.49999551299539Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.945392090279711,20.999999999998181h10c.552284749830505,0,1-.447715250169495,1-1v-8.5c0-.52880859375-.10791015625-1.028686523439319-.275512695309772-1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.945392090099631" y1="6.999999999998181" x2="6.445392090279711" y2="6.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.945392090279711" y1="16.999999999998181" x2="7.945392090279711" y2="16.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Mailbox52.displayName = 'Mailbox52';

module.exports = Mailbox52;
module.exports.Mailbox52 = Mailbox52;
module.exports.default = Mailbox52;

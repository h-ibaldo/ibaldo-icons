"use strict";

const { forwardRef } = require('react');

const AgendaContacts69 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20,17.999999999998181H6c-1.10456839509061,0-1.999997999999323.895429604910532-1.999997999999323,1.999998000001142v.000003999997716c0,1.10456839509061.895429604908713,1.999998000001142,1.999997999999323,1.999998000001142h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20,17.999999999998181V1.999999999998181H6c-1.10456839509061,0-1.999997999999323.895429604910532-1.999997999999323,1.999998000001142v.000003999997716" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000002000000677" y1="3.999999999998181" x2="4.000002000000677" y2="19.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <circle cx="12" cy="8.999999999998181" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16,14.999999999998181v-.000002999999197c0-1.656852583189902-1.343144332418888-2.999997000000803-2.999996910590198-2.999997000000803h-2.000006178819604c-1.656852566519774,0-2.999996910590198,1.343144416810901-2.999996910590198,2.999996970169377v.000003029830623" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

AgendaContacts69.displayName = 'AgendaContacts69';

module.exports = AgendaContacts69;
module.exports.AgendaContacts69 = AgendaContacts69;
module.exports.default = AgendaContacts69;

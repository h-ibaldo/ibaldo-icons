"use strict";

const { forwardRef } = require('react');

const AtSign1Plus = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="7.000000005029506" cy="7.000000005306219" r="5.000000000000341" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000005029506" y1="5.000000000455657" x2="7.000000005029506" y2="9.000000000453838" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.000000005029506" y1="7.000000000364707" x2="5.000000005029506" y2="7.000000000542059" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.361938481599282,14.644714355922588c.628173828121362,1.386474609375,2.016845703121362,2.35528564453125,3.638061523430224,2.35528564453125,2.209167480481483,0,4-1.79083251953125,4-4,0-1.621215820310681-.968811035159888-3.009887695310681-2.355285644518517-3.638061523435681" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.000000005029506,13.000000000453838c0-4.47222900390625-3.26531982421875-8.172058105467841-7.539794921880457-8.87109375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.128906255029506,14.460205078578838c.69903564453125,4.274475097657159,4.398864746090112,7.539794921875,8.87109375,7.539794921875,1.438842773441138,0,3.793823242191138-.34625244140625,5-.94659423828125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.000000005029506,13.000000000453838v1.500002499998118c0,1.3807104938669-1.119287006140439,2.499997500001882-2.499997499999154,2.499997500001882h-.000004999990779c-1.380710493880542,0-2.499997500010068-1.119287006134982-2.499997500010068-2.499997500001882v-1.500002499998118" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSign1Plus.displayName = 'AtSign1Plus';

module.exports = AtSign1Plus;
module.exports.AtSign1Plus = AtSign1Plus;
module.exports.default = AtSign1Plus;

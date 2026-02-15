"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1BulbIdea1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M6.00000000018008,22.000000000448381h-2c-1.104569499660101,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500339899-2,2-2h16c1.104569499660101,0,2,.89543050033808,2,2v16c0,1.10456949966283-.895430500339899,2-2,2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.00000000018008" y1="8.000000000448381" x2="22.00000000018008" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.00000000018008" y1="22.000000000448381" x2="13.00000000018008" y2="22.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.50000000018008,15.500000000448381c0-2.201570038459977-2.032742474109909-3.928405953884976-4.323765350080066-3.405999099451947-1.283893411759891.292757757112668-2.318030728250051,1.347822561830981-2.593633736760239,2.635507452946513-.256871398629301,1.200166212906879.104207541480719,2.320508093986973.822193058949779,3.11267490985847.359273278550063.396392910674876.595188595600121.888391193291682.595195942190912,1.423372153941273l.000000061169885.0044546073741c.000005536419849.403163952466457.326836047429424.729989975331591.729999999929532.729989975331591h2.540013561249907c.403166486230475,0,.729998046750552-.326829977120724.729999999990468-.729996463342104l.000000031939635-.006591869101612c.000002571029654-.530686119140228.230297807879651-1.021073831670947.587894216019777-1.413186782157936.565893262920326-.620515396502924.912102215400409-1.444051634826792.912102215400409-2.350224885398347Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1BulbIdea1.displayName = 'ApplicationWindow1BulbIdea1';

module.exports = ApplicationWindow1BulbIdea1;
module.exports.ApplicationWindow1BulbIdea1 = ApplicationWindow1BulbIdea1;
module.exports.default = ApplicationWindow1BulbIdea1;

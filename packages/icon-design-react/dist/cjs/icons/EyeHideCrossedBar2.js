"use strict";

const { forwardRef } = require('react');

const EyeHideCrossedBar2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M12.025268544155551,16.99756204015921c2.761474609380457,0,5-2.23858642578125,5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.025268544155551" y1="19.99756204015921" x2="20.025268544155551" y2="3.99756204015921" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.070434559786008,17.95245705969046c.316162109369543.0269775390625.634033203119543.04510498046875.954833984369543.04510498046875,4.272705078130457,0,8.178466796880457-2.44097900390625,10-6-.544189453119543-1.063232421875-1.277587890619543-2.02362060546875-2.14794921875-2.85205078125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.560913075405551,8.46203957922171c-.905029296869543-.90478515625-2.15478515625-1.4644775390625-3.53564453125-1.4644775390625-2.761474609369543,0-5,2.23858642578125-5,5,0,1.38067626953125.5595703125,2.6307373046875,1.46435546875,3.5355224609375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.910522450405551,7.11236916906546c-1.493896484369543-.71038818359375-3.157958984369543-1.11480712890625-4.88525390625-1.11480712890625-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.085205078130457,2.12030029296875,2.913330078130457,3.8382568359375,5.11474609375,4.88519287109375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

EyeHideCrossedBar2.displayName = 'EyeHideCrossedBar2';

module.exports = EyeHideCrossedBar2;
module.exports.EyeHideCrossedBar2 = EyeHideCrossedBar2;
module.exports.default = EyeHideCrossedBar2;

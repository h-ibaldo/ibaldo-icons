"use strict";

const { forwardRef } = require('react');

const UserHead20 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.839111328125,12.376770019447576c-.50634765625.362854003909888-.839111328125.952758789060681-.839111328125,1.623229980470569,0,.840576171880457.519897460938409,1.557189941409888,1.254638671875,1.853088378909888.539916992188409,1.786376953119543,1.573608398438409,3.428283691400793,3.057373046875,4.699951171869543l.9287109375.796142578130457c.489990234375.419982910150793,1.114013671875.650817871090112,1.75927734375.650817871090112s1.269287109375-.230834960939319,1.75927734375-.650817871090112l.928833007813409-.796142578130457c1.483642578125-1.27166748046875,2.517211914061591-2.91357421875,3.057250976561591-4.699951171869543.734741210938409-.2958984375,1.254638671875-1.012512207029431,1.254638671875-1.853088378909888,0-.67041015625-.332763671875-1.260314941409888-.839111328125-1.623229980470569" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="4.999999999918145" x2="12" y2="1.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15" y1="4.999999999918145" x2="16" y2="2.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18" y1="5.999999999918145" x2="19" y2="5.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18" y1="8.999999999918145" x2="20" y2="9.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9" y1="5.000000000029104" x2="8.00000000008913" y2="2.999999999989086" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6" y1="5.999999999918145" x2="5" y2="5.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6" y1="8.999999999967258" x2="4" y2="9.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19" y1="20.999999999918145" x2="19" y2="21.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21" y1="17.999999999918145" x2="22" y2="20.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000000044565" y1="20.999999999829015" x2="5" y2="21.999999999869033" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.999999999909051" y1="17.999999999918145" x2="2" y2="20.999999999918145" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UserHead20.displayName = 'UserHead20';

module.exports = UserHead20;
module.exports.UserHead20 = UserHead20;
module.exports.default = UserHead20;

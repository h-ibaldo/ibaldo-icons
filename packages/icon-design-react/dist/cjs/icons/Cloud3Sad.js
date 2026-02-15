"use strict";

const { forwardRef } = require('react');

const Cloud3Sad = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M17.924255383690252,9.093139648438409c-.438171386720569-2.882202148440228-2.919616699220569-5.093139648440228-5.924255371090112-5.093139648440228-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648440228-2.318725585930224.434509277339203-4.075744628900793,2.462036132809772-4.075744628900793,4.906860351559772,0,2.761413574209655,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425790345,5-5,0-2.44482421875-1.757019042970569-4.472351074220569-4.075744628909888-4.906860351559772Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10" y1="10.999999973497324" x2="10" y2="9.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14" y1="10.999999973497324" x2="14" y2="9.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9,14.999999973497324c.883239746090112-.511657714840112,1.905822753900793-.80926513671875,3-.80926513671875,1.094177246090112,0,2.116760253900793.297607421878638,3,.80926513671875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud3Sad.displayName = 'Cloud3Sad';

module.exports = Cloud3Sad;
module.exports.Cloud3Sad = Cloud3Sad;
module.exports.default = Cloud3Sad;

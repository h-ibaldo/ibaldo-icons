"use strict";

const { forwardRef } = require('react');

const ArrowsClockwise2Slash2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.00000000036016,20.000000000680302l-4-.000000000451109.000000000447471-3.999999999909051" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21" y1="3" x2="3" y2="21" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.36395263671875,5.635986328128638c-1.628723144532159-1.628662109378638-3.878662109375-2.635986328128638-6.36395263671875-2.635986328128638-.33856201171875,0-.67181396484375.021362304689319-1,.0595703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17,19.482421875c2.41143798828125-1.61474609375,4-4.362548828121362,4-7.482421875,0-.908813476560681-.137573242188409-1.784912109371362-.388061523438409-2.611938476560681" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.000000001159606,4l4,.00000000080945-.000000000806722,3.99999999991087" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.636047363514081,18.364013672788133c1.628723144382093,1.628662109520519,3.878662109134893,2.635986328470608,6.363952636478643,2.635986328692525.338562011717841.000000000029104.671813964847388-.021362304622016,1.000000000007276-.05957031241087" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.000000001473381,4.517578126029548c-2.411437988426769,1.614746093538997-4.000000000389264,4.362548827770297-4.000000000669388,7.482421874650754-.000000000083674.908813476558862.137573242027429,1.784912109378638.388061523201031,2.611938476587966" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowsClockwise2Slash2.displayName = 'ArrowsClockwise2Slash2';

module.exports = ArrowsClockwise2Slash2;
module.exports.ArrowsClockwise2Slash2 = ArrowsClockwise2Slash2;
module.exports.default = ArrowsClockwise2Slash2;

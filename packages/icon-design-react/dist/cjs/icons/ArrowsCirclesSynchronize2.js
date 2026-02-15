"use strict";

const { forwardRef } = require('react');

const ArrowsCirclesSynchronize2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M3.00000000036016,3.999999999998181l4,.00000000008913-.000000000090949,3.99999999991087" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="4.5" cy="16.499999999998181" r="2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.8779296875,18.583740234367724c1.606811523438409,1.494873046880457,3.75439453125,2.416259765630457,6.1220703125,2.416259765630457.33856201171875,0,.67181396484375-.021362304689319,1-.0595703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7,4.517578124998181c-2.41143798828125,1.61474609375-4,4.362548828119543-4,7.482421875,0,.80126953125.114868164063409,1.573974609369543.31134033203125,2.3134765625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.999999998515705,20.000000000807631l-4-.00000000044929.000000000451109-3.99999999991087" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.500000000000455" cy="7.500000000671434" r="2.499999999998749" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.122070312687356,5.416259766167059c-1.606811523304714-1.4948730470187-3.75439453103354-2.416259765959694-6.12207031228354-2.416259766168878-.33856201171875-.000000000030923-.67181396484375.021362304631111-1.000000000003638.05957031241087" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.999999998923158,19.482421875447471c2.411437988426769-1.614746093538997,4.000000000392902-4.362548827768478,4.000000000673026-7.48242187463984.00000000007276-.80126953125-.114868163920619-1.573974609389552-.311340331823885-2.313476562529104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowsCirclesSynchronize2.displayName = 'ArrowsCirclesSynchronize2';

module.exports = ArrowsCirclesSynchronize2;
module.exports.ArrowsCirclesSynchronize2 = ArrowsCirclesSynchronize2;
module.exports.default = ArrowsCirclesSynchronize2;

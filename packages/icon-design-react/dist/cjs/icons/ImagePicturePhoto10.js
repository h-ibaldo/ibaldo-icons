"use strict";

const { forwardRef } = require('react');

const ImagePicturePhoto10 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999991170625" y="1.998779300291517" width="20" height="19.99999999271995" rx=".948683298078622" ry=".948683298078622" transform="translate(23.999999981854167 23.997558593790117) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.499999991259756" cy="8.498779303565243" r="2.499999996359293" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.443725580480532,21.908691409298626l-3.389770507810681-5.42352294921875c-.7177734375-1.14837646484375-2.39013671875-1.14837646484375-3.10791015625,0-.783447265630457,1.25335693359375-2.608642578130457,1.25335693359375-3.39208984375,0l-1.510009765630457-2.416015625c-1.174926757808862-1.8800048828125-3.912963867189319-1.8800048828125-5.087890625,0l-2.9560546875,4.7296142578125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ImagePicturePhoto10.displayName = 'ImagePicturePhoto10';

module.exports = ImagePicturePhoto10;
module.exports.ImagePicturePhoto10 = ImagePicturePhoto10;
module.exports.default = ImagePicturePhoto10;

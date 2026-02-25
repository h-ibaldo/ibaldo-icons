"use strict";

const { forwardRef } = require('react');

const ImagePicturePhoto62 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16.12584271715059,14.572262396974111l-2.094592723880851,3.770266902982257-4.150778900078876-7.70858938586025c-.377569357820903-.701200235951546-1.383372842021345-.701200235951546-1.760942199840429,0L1.999999993269739,21.998779299956368h20l-4.125842723879032-7.426516902982257c-.38100523616049-.685809425092884-1.367309316079627-.685809425092884-1.748314552240117,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999993269739" cy="5.998779299956368" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ImagePicturePhoto62.displayName = 'ImagePicturePhoto62';

module.exports = ImagePicturePhoto62;
module.exports.ImagePicturePhoto62 = ImagePicturePhoto62;
module.exports.default = ImagePicturePhoto62;

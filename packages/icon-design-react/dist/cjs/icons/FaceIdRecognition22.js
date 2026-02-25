"use strict";

const { forwardRef } = require('react');

const FaceIdRecognition22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M2,6.000000006424671v-1.000000006286427c0-1.656854249489697,1.343145750510303-3,3-3h.999999962519723" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.999999999869033,6.000000006559276l.000000000130967-1.000000006286427c.000000000080036-1.656854249492426-1.34314575037024-3.000000000058208-2.999999999859938-3.000000000134605l-1.000000037620339-.000000000134605" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2,18.000000006424671v.999999993982783c0,1.656854249493335,1.343145750510303,3,3,3h.999999962519723" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.999999999869033,18.000000006290065l.000000000130967.999999993982783c.000000000080036,1.656854249493335-1.34314575037024,3.000000000061846-2.999999999859938,3.000000000134605l-1.000000037620339.000000000134605" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999962519723" cy="12.000000006424671" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.828427087330056,14.828427131105855c-1.562097166879539,1.562097166952299-4.094757082541037,1.562097167010506-5.656854249489697.000000000127329" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999962519723" y1="11.000000006424671" x2="14.999999962519723" y2="10.000000006424671" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999962519723" y1="11.000000006424671" x2="8.999999962519723" y2="10.000000006424671" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FaceIdRecognition22.displayName = 'FaceIdRecognition22';

module.exports = FaceIdRecognition22;
module.exports.FaceIdRecognition22 = FaceIdRecognition22;
module.exports.default = FaceIdRecognition22;

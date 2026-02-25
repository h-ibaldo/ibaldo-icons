"use strict";

const { forwardRef } = require('react');

const FaceIdRecognition32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M1.999999973300874,7.000000001302396v-2.000000000134605c0-1.656854249493335,1.343145750508484-3,3-3h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.999999973169906,7.000000001437002l.000000000130967-2.000000000134605c.000000000080036-1.656854249493335-1.34314575037024-3.000000000058208-2.999999999861757-3.000000000134605l-2.000000000138243-.000000000134605" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.999999973300874,17.000000001302396v2.000000000134605c0,1.656854249493335,1.343145750508484,3,3,3h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.999999973169906,17.000000001167791l.000000000130967,2.000000000134605c.000000000080036,1.656854249493335-1.34314575037024,3.000000000061846-2.999999999861757,3.000000000134605l-2.000000000138243.000000000134605" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.999999946599928,6.000000002604793c-3.9169921875,0-7.240173339840112,2.50677490234375-8.476928710939319,6,1.236755371099207,3.49322509765625,4.559936523439319,6,8.476928710939319,6s7.240173339840112-2.50677490234375,8.476928710939319-6c-1.236755371099207-3.49322509765625-4.559936523439319-6-8.476928710939319-6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999973300874" cy="12.000000001033186" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FaceIdRecognition32.displayName = 'FaceIdRecognition32';

module.exports = FaceIdRecognition32;
module.exports.FaceIdRecognition32 = FaceIdRecognition32;
module.exports.default = FaceIdRecognition32;

import { forwardRef } from 'react';

const ToolbarPreviewEye = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <rect x="1.999999975216269" y="2.997562033088798" width="20" height="18.000135182981467" rx="1.999999999977123" ry="1.999999999977123" transform="translate(23.999999950855372 23.995259248736147) rotate(180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.999999972054866,6.997562036587624c-3.356506347659888,0-6.225708007808862,2.069396972655341-7.413024902338293,5,1.187316894529431,2.930603027342841,4.056518554678405,5,7.413024902338293,5,3.356506347661707,0,6.225708007810681-2.069396972657159,7.413024902340112-5-1.187316894529431-2.930603027344659-4.056518554678405-5-7.413024902340112-5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999972054866" cy="11.997562036587624" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ToolbarPreviewEye.displayName = 'ToolbarPreviewEye';

export default ToolbarPreviewEye;
export { ToolbarPreviewEye };

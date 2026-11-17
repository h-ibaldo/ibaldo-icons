import { forwardRef } from 'react';

const Cloud3Upload = forwardRef(({
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
    <polyline points="7.999999999998181 14.999999973497324 10.999999999998181 17.999999973497324 7.999999999998181 20.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999999998181" y1="17.999999973497324" x2="10.999999999998181" y2="17.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999999998181,17.999999973497324h1c2.761474609375,0,5-2.238586425788526,5-5,0-2.44482421875-1.75701904296875-4.47235107421875-4.07574462890625-4.906860351558862-.43817138671875-2.882202148441138-2.91961669921875-5.093139648441138-5.92425537109375-5.093139648441138s-5.486083984375,2.2109375-5.92425537109375,5.093139648441138c-2.3187255859375.434509277340112-4.07574462890625,2.462036132808862-4.07574462890625,4.906860351558862" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud3Upload.displayName = 'Cloud3Upload';

export default Cloud3Upload;
export { Cloud3Upload };

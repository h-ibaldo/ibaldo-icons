import { forwardRef } from 'react';

const Cloud3Download2 = forwardRef(({
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
    <polyline points="8.999999987390765 11.999999999998181 11.999999987390765 14.999999999998181 14.999999987390765 11.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999987390765" y1="8.999999999998181" x2="11.999999987390765" y2="14.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.924255372901825,9.093139648428405c-.438171386720569-2.882202148430224-2.919616699220569-5.093139648430224-5.924255371090112-5.093139648430224-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371090112,5.093139648430224-2.318725585939319.434509277349207-4.075744628909888,2.462036132819776-4.075744628909888,4.906860351569776,0,2.761413574209655,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425790345,5-5,0-2.44482421875-1.75701904296875-4.472351074220569-4.075744628909888-4.906860351569776Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud3Download2.displayName = 'Cloud3Download2';

export default Cloud3Download2;
export { Cloud3Download2 };

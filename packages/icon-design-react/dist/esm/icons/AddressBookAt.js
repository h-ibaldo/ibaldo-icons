import { createElement, forwardRef } from 'react';

const AddressBookAt = forwardRef(function AddressBookAt(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('rect', {"x":"3.999998999999661","y":"1.999999999998181","width":"18","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"1.999998999999661","y1":"6.999999999998181","x2":"4.999998999999661","y2":"6.999999999998181","key":"1"}),
    createElement('line', {"x1":"1.999998999999661","y1":"11.999999999998181","x2":"4.999998999999661","y2":"11.999999999998181","key":"2"}),
    createElement('line', {"x1":"1.999998999999661","y1":"16.999999999998181","x2":"4.999998999999661","y2":"16.999999999998181","key":"3"}),
    createElement('rect', {"x":"10.99999898501974","y":"8.999999999999034","width":"4.000000031988755","height":"6","rx":"1.99999801785202","ry":"1.99999801785202","key":"4"}),
    createElement('path', {"d":"M14.999998999999661,17.999999999998181h-3c-2.209138999320203,0-4-1.790861000679797-4-4v-4c0-2.209138999320203,1.790861000679797-4,4-4h2c2.209138999320203,0,4,1.790861000679797,4,4v1","key":"5"}),
    createElement('path', {"d":"M14.999998999999661,12.999999999998181l-.000000011179509.500001451580829c-.000000018510036.828426317628328.671572197259593,1.499998548419171,1.499998514900653,1.499998548419171h.000002999999197c.828426308909911,0,1.499998521068846-.671572217159337,1.499998514898834-1.499998526071067l-.000000018619176-2.500001473928933","key":"6"})
  );
});

AddressBookAt.displayName = 'AddressBookAt';

export default AddressBookAt;
export { AddressBookAt };

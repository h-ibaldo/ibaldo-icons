import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const FormDropdownMinimal = forwardRef(function FormDropdownMinimal(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M1.974731444090139,6.999999995568942h19c.5522847498396,0,1,.559644062712323,1,1.25v7.500000000003638c0,.690355937287677-.4477152501604,1.25-1,1.25H1.974731444090139","key":"0"}),
    createElement(Path, {"d":"M14.974731444090139,10.99999999557258l1.292893218811514,1.292893218815152c.390524291749898.390524291749898,1.023689270619798.390524291749898,1.414213562369696,0l1.29289321881879-1.292893218815152","key":"1"}),
    createElement(Line, {"x1":"11.974731444090139","y1":"6.99999999557258","x2":"11.974731444090139","y2":"16.99999999557258","key":"2"})
  );
});

FormDropdownMinimal.displayName = 'FormDropdownMinimal';

export default FormDropdownMinimal;
export { FormDropdownMinimal };

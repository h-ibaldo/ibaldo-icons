import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormCheckboxLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormCheckboxLarge: ForwardRefExoticComponent<FormCheckboxLargeProps & RefAttributes<Svg>>;

export default FormCheckboxLarge;
export { FormCheckboxLarge };

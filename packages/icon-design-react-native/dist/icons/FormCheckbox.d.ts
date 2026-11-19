import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormCheckboxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormCheckbox: ForwardRefExoticComponent<FormCheckboxProps & RefAttributes<Svg>>;

export default FormCheckbox;
export { FormCheckbox };

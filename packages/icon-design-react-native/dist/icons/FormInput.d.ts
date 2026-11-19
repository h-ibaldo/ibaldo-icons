import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormInputProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormInput: ForwardRefExoticComponent<FormInputProps & RefAttributes<Svg>>;

export default FormInput;
export { FormInput };

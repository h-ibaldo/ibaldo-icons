import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormInputNumberProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormInputNumber: ForwardRefExoticComponent<FormInputNumberProps & RefAttributes<Svg>>;

export default FormInputNumber;
export { FormInputNumber };

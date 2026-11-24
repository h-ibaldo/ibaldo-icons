import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormRowsCheckboxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormRowsCheckbox: ForwardRefExoticComponent<FormRowsCheckboxProps & RefAttributes<Svg>>;

export default FormRowsCheckbox;
export { FormRowsCheckbox };

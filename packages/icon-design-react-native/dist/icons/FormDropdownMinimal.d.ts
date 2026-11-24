import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormDropdownMinimalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormDropdownMinimal: ForwardRefExoticComponent<FormDropdownMinimalProps & RefAttributes<Svg>>;

export default FormDropdownMinimal;
export { FormDropdownMinimal };

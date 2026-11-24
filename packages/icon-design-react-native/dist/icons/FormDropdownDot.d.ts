import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormDropdownDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormDropdownDot: ForwardRefExoticComponent<FormDropdownDotProps & RefAttributes<Svg>>;

export default FormDropdownDot;
export { FormDropdownDot };

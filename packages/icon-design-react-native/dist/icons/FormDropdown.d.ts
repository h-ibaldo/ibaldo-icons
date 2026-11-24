import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormDropdownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormDropdown: ForwardRefExoticComponent<FormDropdownProps & RefAttributes<Svg>>;

export default FormDropdown;
export { FormDropdown };

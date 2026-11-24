import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormDropdownExpandedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormDropdownExpanded: ForwardRefExoticComponent<FormDropdownExpandedProps & RefAttributes<Svg>>;

export default FormDropdownExpanded;
export { FormDropdownExpanded };

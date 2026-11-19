import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormDropdownExpandedBulletsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormDropdownExpandedBullets: ForwardRefExoticComponent<FormDropdownExpandedBulletsProps & RefAttributes<Svg>>;

export default FormDropdownExpandedBullets;
export { FormDropdownExpandedBullets };

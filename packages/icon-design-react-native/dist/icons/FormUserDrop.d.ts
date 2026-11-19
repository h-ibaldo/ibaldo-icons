import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormUserDropProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormUserDrop: ForwardRefExoticComponent<FormUserDropProps & RefAttributes<Svg>>;

export default FormUserDrop;
export { FormUserDrop };

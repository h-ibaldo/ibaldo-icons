import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormLockDropProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormLockDrop: ForwardRefExoticComponent<FormLockDropProps & RefAttributes<Svg>>;

export default FormLockDrop;
export { FormLockDrop };

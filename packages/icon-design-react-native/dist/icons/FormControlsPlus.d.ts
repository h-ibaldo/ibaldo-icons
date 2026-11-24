import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormControlsPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormControlsPlus: ForwardRefExoticComponent<FormControlsPlusProps & RefAttributes<Svg>>;

export default FormControlsPlus;
export { FormControlsPlus };

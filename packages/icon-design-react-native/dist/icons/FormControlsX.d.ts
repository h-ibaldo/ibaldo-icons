import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormControlsXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormControlsX: ForwardRefExoticComponent<FormControlsXProps & RefAttributes<Svg>>;

export default FormControlsX;
export { FormControlsX };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormControlsCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormControlsCheck: ForwardRefExoticComponent<FormControlsCheckProps & RefAttributes<Svg>>;

export default FormControlsCheck;
export { FormControlsCheck };

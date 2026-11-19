import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormControlsGridXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormControlsGridX: ForwardRefExoticComponent<FormControlsGridXProps & RefAttributes<Svg>>;

export default FormControlsGridX;
export { FormControlsGridX };

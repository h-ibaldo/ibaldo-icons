import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormRadioDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormRadioDot: ForwardRefExoticComponent<FormRadioDotProps & RefAttributes<Svg>>;

export default FormRadioDot;
export { FormRadioDot };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormRadioDotLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormRadioDotLong: ForwardRefExoticComponent<FormRadioDotLongProps & RefAttributes<Svg>>;

export default FormRadioDotLong;
export { FormRadioDotLong };

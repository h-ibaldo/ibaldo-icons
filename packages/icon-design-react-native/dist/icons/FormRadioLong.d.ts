import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormRadioLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormRadioLong: ForwardRefExoticComponent<FormRadioLongProps & RefAttributes<Svg>>;

export default FormRadioLong;
export { FormRadioLong };

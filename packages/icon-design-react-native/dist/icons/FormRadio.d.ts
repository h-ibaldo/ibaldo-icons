import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormRadioProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormRadio: ForwardRefExoticComponent<FormRadioProps & RefAttributes<Svg>>;

export default FormRadio;
export { FormRadio };

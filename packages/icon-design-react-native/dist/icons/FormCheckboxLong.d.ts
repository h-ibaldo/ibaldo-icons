import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormCheckboxLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormCheckboxLong: ForwardRefExoticComponent<FormCheckboxLongProps & RefAttributes<Svg>>;

export default FormCheckboxLong;
export { FormCheckboxLong };

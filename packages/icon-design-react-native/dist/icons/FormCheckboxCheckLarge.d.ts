import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormCheckboxCheckLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormCheckboxCheckLarge: ForwardRefExoticComponent<FormCheckboxCheckLargeProps & RefAttributes<Svg>>;

export default FormCheckboxCheckLarge;
export { FormCheckboxCheckLarge };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormCheckboxCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormCheckboxCheck: ForwardRefExoticComponent<FormCheckboxCheckProps & RefAttributes<Svg>>;

export default FormCheckboxCheck;
export { FormCheckboxCheck };

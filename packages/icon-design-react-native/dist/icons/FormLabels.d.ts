import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormLabelsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormLabels: ForwardRefExoticComponent<FormLabelsProps & RefAttributes<Svg>>;

export default FormLabels;
export { FormLabels };

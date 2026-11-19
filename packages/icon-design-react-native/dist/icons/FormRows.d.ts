import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormRowsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormRows: ForwardRefExoticComponent<FormRowsProps & RefAttributes<Svg>>;

export default FormRows;
export { FormRows };

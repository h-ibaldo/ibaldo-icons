import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormRowsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormRowsSquare: ForwardRefExoticComponent<FormRowsSquareProps & RefAttributes<Svg>>;

export default FormRowsSquare;
export { FormRowsSquare };

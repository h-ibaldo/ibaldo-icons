import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormCenteredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormCentered: ForwardRefExoticComponent<FormCenteredProps & RefAttributes<Svg>>;

export default FormCentered;
export { FormCentered };

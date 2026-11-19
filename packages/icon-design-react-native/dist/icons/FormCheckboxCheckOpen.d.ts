import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormCheckboxCheckOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormCheckboxCheckOpen: ForwardRefExoticComponent<FormCheckboxCheckOpenProps & RefAttributes<Svg>>;

export default FormCheckboxCheckOpen;
export { FormCheckboxCheckOpen };

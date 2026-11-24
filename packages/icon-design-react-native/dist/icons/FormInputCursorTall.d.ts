import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormInputCursorTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormInputCursorTall: ForwardRefExoticComponent<FormInputCursorTallProps & RefAttributes<Svg>>;

export default FormInputCursorTall;
export { FormInputCursorTall };

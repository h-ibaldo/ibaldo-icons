import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormInputCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormInputCursor: ForwardRefExoticComponent<FormInputCursorProps & RefAttributes<Svg>>;

export default FormInputCursor;
export { FormInputCursor };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonCursor: ForwardRefExoticComponent<ButtonCursorProps & RefAttributes<Svg>>;

export default ButtonCursor;
export { ButtonCursor };

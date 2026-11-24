import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonPillCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonPillCursor: ForwardRefExoticComponent<ButtonPillCursorProps & RefAttributes<Svg>>;

export default ButtonPillCursor;
export { ButtonPillCursor };

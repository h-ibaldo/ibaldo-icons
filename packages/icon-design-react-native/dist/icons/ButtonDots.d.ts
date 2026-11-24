import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonDots: ForwardRefExoticComponent<ButtonDotsProps & RefAttributes<Svg>>;

export default ButtonDots;
export { ButtonDots };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonPillDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonPillDots: ForwardRefExoticComponent<ButtonPillDotsProps & RefAttributes<Svg>>;

export default ButtonPillDots;
export { ButtonPillDots };

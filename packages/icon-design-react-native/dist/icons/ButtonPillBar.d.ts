import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonPillBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonPillBar: ForwardRefExoticComponent<ButtonPillBarProps & RefAttributes<Svg>>;

export default ButtonPillBar;
export { ButtonPillBar };

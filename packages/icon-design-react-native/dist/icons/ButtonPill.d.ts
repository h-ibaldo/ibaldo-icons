import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonPillProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonPill: ForwardRefExoticComponent<ButtonPillProps & RefAttributes<Svg>>;

export default ButtonPill;
export { ButtonPill };

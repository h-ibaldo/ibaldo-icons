import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonPillHandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonPillHand: ForwardRefExoticComponent<ButtonPillHandProps & RefAttributes<Svg>>;

export default ButtonPillHand;
export { ButtonPillHand };

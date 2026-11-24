import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonPillRaisedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonPillRaised: ForwardRefExoticComponent<ButtonPillRaisedProps & RefAttributes<Svg>>;

export default ButtonPillRaised;
export { ButtonPillRaised };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandMoveTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandMoveTwoFingers: ForwardRefExoticComponent<HandMoveTwoFingersProps & RefAttributes<Svg>>;

export default HandMoveTwoFingers;
export { HandMoveTwoFingers };

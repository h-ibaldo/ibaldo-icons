import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapDoubleTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapDoubleTwoFingers: ForwardRefExoticComponent<HandTapDoubleTwoFingersProps & RefAttributes<Svg>>;

export default HandTapDoubleTwoFingers;
export { HandTapDoubleTwoFingers };

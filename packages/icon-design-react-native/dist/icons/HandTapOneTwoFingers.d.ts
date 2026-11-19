import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapOneTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapOneTwoFingers: ForwardRefExoticComponent<HandTapOneTwoFingersProps & RefAttributes<Svg>>;

export default HandTapOneTwoFingers;
export { HandTapOneTwoFingers };

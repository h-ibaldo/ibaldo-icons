import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapTwoFingers: ForwardRefExoticComponent<HandTapTwoFingersProps & RefAttributes<Svg>>;

export default HandTapTwoFingers;
export { HandTapTwoFingers };

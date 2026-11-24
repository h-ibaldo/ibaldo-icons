import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapTwoTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapTwoTwoFingers: ForwardRefExoticComponent<HandTapTwoTwoFingersProps & RefAttributes<Svg>>;

export default HandTapTwoTwoFingers;
export { HandTapTwoTwoFingers };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchTapTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchTapTwoFingers: ForwardRefExoticComponent<TouchTapTwoFingersProps & RefAttributes<Svg>>;

export default TouchTapTwoFingers;
export { TouchTapTwoFingers };

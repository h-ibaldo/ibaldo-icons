import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchTapDoubleTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchTapDoubleTwoFingers: ForwardRefExoticComponent<TouchTapDoubleTwoFingersProps & RefAttributes<Svg>>;

export default TouchTapDoubleTwoFingers;
export { TouchTapDoubleTwoFingers };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeLeftRightFourFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftRightFourFingers: ForwardRefExoticComponent<HandSwipeLeftRightFourFingersProps & RefAttributes<Svg>>;

export default HandSwipeLeftRightFourFingers;
export { HandSwipeLeftRightFourFingers };

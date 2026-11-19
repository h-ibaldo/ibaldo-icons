import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeRightFourFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeRightFourFingers: ForwardRefExoticComponent<HandSwipeRightFourFingersProps & RefAttributes<Svg>>;

export default HandSwipeRightFourFingers;
export { HandSwipeRightFourFingers };

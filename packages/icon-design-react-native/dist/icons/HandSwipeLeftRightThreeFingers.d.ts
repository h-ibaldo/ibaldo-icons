import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeLeftRightThreeFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftRightThreeFingers: ForwardRefExoticComponent<HandSwipeLeftRightThreeFingersProps & RefAttributes<Svg>>;

export default HandSwipeLeftRightThreeFingers;
export { HandSwipeLeftRightThreeFingers };

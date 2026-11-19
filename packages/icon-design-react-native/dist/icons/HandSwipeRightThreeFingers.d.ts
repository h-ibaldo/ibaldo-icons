import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeRightThreeFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeRightThreeFingers: ForwardRefExoticComponent<HandSwipeRightThreeFingersProps & RefAttributes<Svg>>;

export default HandSwipeRightThreeFingers;
export { HandSwipeRightThreeFingers };

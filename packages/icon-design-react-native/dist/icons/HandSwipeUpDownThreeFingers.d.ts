import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpDownThreeFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpDownThreeFingers: ForwardRefExoticComponent<HandSwipeUpDownThreeFingersProps & RefAttributes<Svg>>;

export default HandSwipeUpDownThreeFingers;
export { HandSwipeUpDownThreeFingers };

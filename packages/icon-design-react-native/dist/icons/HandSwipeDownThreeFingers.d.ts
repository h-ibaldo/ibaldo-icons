import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeDownThreeFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeDownThreeFingers: ForwardRefExoticComponent<HandSwipeDownThreeFingersProps & RefAttributes<Svg>>;

export default HandSwipeDownThreeFingers;
export { HandSwipeDownThreeFingers };

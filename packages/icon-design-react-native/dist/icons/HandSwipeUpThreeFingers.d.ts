import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpThreeFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpThreeFingers: ForwardRefExoticComponent<HandSwipeUpThreeFingersProps & RefAttributes<Svg>>;

export default HandSwipeUpThreeFingers;
export { HandSwipeUpThreeFingers };

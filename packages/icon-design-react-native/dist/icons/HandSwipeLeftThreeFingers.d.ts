import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeLeftThreeFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftThreeFingers: ForwardRefExoticComponent<HandSwipeLeftThreeFingersProps & RefAttributes<Svg>>;

export default HandSwipeLeftThreeFingers;
export { HandSwipeLeftThreeFingers };

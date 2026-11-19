import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeLeftFourFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftFourFingers: ForwardRefExoticComponent<HandSwipeLeftFourFingersProps & RefAttributes<Svg>>;

export default HandSwipeLeftFourFingers;
export { HandSwipeLeftFourFingers };

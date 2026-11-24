import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpFourFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpFourFingers: ForwardRefExoticComponent<HandSwipeUpFourFingersProps & RefAttributes<Svg>>;

export default HandSwipeUpFourFingers;
export { HandSwipeUpFourFingers };

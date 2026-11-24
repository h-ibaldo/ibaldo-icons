import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpDownFourFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpDownFourFingers: ForwardRefExoticComponent<HandSwipeUpDownFourFingersProps & RefAttributes<Svg>>;

export default HandSwipeUpDownFourFingers;
export { HandSwipeUpDownFourFingers };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeDownFourFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeDownFourFingers: ForwardRefExoticComponent<HandSwipeDownFourFingersProps & RefAttributes<Svg>>;

export default HandSwipeDownFourFingers;
export { HandSwipeDownFourFingers };

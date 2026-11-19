import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpRightRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpRightRound: ForwardRefExoticComponent<NavigationUpRightRoundProps & RefAttributes<Svg>>;

export default NavigationUpRightRound;
export { NavigationUpRightRound };

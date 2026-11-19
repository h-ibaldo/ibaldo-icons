import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpLeftRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpLeftRound: ForwardRefExoticComponent<NavigationUpLeftRoundProps & RefAttributes<Svg>>;

export default NavigationUpLeftRound;
export { NavigationUpLeftRound };

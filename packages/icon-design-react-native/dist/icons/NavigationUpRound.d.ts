import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpRound: ForwardRefExoticComponent<NavigationUpRoundProps & RefAttributes<Svg>>;

export default NavigationUpRound;
export { NavigationUpRound };

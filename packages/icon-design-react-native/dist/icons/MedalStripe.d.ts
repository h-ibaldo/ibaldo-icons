import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalStripeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalStripe: ForwardRefExoticComponent<MedalStripeProps & RefAttributes<Svg>>;

export default MedalStripe;
export { MedalStripe };

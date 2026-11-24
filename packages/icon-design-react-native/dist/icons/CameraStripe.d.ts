import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraStripeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraStripe: ForwardRefExoticComponent<CameraStripeProps & RefAttributes<Svg>>;

export default CameraStripe;
export { CameraStripe };

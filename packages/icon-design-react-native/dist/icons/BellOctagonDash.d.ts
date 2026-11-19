import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellOctagonDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellOctagonDash: ForwardRefExoticComponent<BellOctagonDashProps & RefAttributes<Svg>>;

export default BellOctagonDash;
export { BellOctagonDash };

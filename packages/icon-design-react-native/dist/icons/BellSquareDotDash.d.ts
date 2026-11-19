import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSquareDotDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSquareDotDash: ForwardRefExoticComponent<BellSquareDotDashProps & RefAttributes<Svg>>;

export default BellSquareDotDash;
export { BellSquareDotDash };

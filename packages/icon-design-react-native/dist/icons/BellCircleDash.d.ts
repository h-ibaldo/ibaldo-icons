import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCircleDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCircleDash: ForwardRefExoticComponent<BellCircleDashProps & RefAttributes<Svg>>;

export default BellCircleDash;
export { BellCircleDash };

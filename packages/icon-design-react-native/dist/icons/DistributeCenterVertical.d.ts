import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DistributeCenterVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DistributeCenterVertical: ForwardRefExoticComponent<DistributeCenterVerticalProps & RefAttributes<Svg>>;

export default DistributeCenterVertical;
export { DistributeCenterVertical };

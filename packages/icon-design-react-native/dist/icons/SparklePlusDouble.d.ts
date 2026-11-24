import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SparklePlusDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SparklePlusDouble: ForwardRefExoticComponent<SparklePlusDoubleProps & RefAttributes<Svg>>;

export default SparklePlusDouble;
export { SparklePlusDouble };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoltOffTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoltOffTilted: ForwardRefExoticComponent<BoltOffTiltedProps & RefAttributes<Svg>>;

export default BoltOffTilted;
export { BoltOffTilted };

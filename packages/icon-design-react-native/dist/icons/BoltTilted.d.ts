import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoltTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoltTilted: ForwardRefExoticComponent<BoltTiltedProps & RefAttributes<Svg>>;

export default BoltTilted;
export { BoltTilted };

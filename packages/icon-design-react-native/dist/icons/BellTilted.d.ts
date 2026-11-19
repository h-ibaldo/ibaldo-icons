import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellTilted: ForwardRefExoticComponent<BellTiltedProps & RefAttributes<Svg>>;

export default BellTilted;
export { BellTilted };

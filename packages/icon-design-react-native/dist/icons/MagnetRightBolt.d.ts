import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MagnetRightBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MagnetRightBolt: ForwardRefExoticComponent<MagnetRightBoltProps & RefAttributes<Svg>>;

export default MagnetRightBolt;
export { MagnetRightBolt };

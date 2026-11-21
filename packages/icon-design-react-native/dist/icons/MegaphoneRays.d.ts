import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MegaphoneRaysProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MegaphoneRays: ForwardRefExoticComponent<MegaphoneRaysProps & RefAttributes<Svg>>;

export default MegaphoneRays;
export { MegaphoneRays };

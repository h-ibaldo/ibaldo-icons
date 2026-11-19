import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileCubeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileCube: ForwardRefExoticComponent<MobileCubeProps & RefAttributes<Svg>>;

export default MobileCube;
export { MobileCube };

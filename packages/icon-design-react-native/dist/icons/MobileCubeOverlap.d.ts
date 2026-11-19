import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileCubeOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileCubeOverlap: ForwardRefExoticComponent<MobileCubeOverlapProps & RefAttributes<Svg>>;

export default MobileCubeOverlap;
export { MobileCubeOverlap };

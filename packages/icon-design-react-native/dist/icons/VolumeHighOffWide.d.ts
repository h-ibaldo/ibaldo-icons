import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeHighOffWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeHighOffWide: ForwardRefExoticComponent<VolumeHighOffWideProps & RefAttributes<Svg>>;

export default VolumeHighOffWide;
export { VolumeHighOffWide };

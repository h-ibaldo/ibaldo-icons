import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeHighWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeHighWide: ForwardRefExoticComponent<VolumeHighWideProps & RefAttributes<Svg>>;

export default VolumeHighWide;
export { VolumeHighWide };

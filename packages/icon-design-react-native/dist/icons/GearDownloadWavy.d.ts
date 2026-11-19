import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearDownloadWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearDownloadWavy: ForwardRefExoticComponent<GearDownloadWavyProps & RefAttributes<Svg>>;

export default GearDownloadWavy;
export { GearDownloadWavy };

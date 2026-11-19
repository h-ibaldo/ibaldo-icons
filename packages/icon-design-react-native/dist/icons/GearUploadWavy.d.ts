import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearUploadWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearUploadWavy: ForwardRefExoticComponent<GearUploadWavyProps & RefAttributes<Svg>>;

export default GearUploadWavy;
export { GearUploadWavy };

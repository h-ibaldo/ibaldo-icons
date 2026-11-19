import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SealBannerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SealBanner: ForwardRefExoticComponent<SealBannerProps & RefAttributes<Svg>>;

export default SealBanner;
export { SealBanner };

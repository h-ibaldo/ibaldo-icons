import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalBannerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalBanner: ForwardRefExoticComponent<MedalBannerProps & RefAttributes<Svg>>;

export default MedalBanner;
export { MedalBanner };

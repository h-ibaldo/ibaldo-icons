import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalStarBannerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalStarBanner: ForwardRefExoticComponent<MedalStarBannerProps & RefAttributes<Svg>>;

export default MedalStarBanner;
export { MedalStarBanner };

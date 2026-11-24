import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HotspotDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HotspotDots: ForwardRefExoticComponent<HotspotDotsProps & RefAttributes<Svg>>;

export default HotspotDots;
export { HotspotDots };

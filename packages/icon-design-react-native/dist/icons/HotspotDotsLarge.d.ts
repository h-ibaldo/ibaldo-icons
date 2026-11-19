import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HotspotDotsLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HotspotDotsLarge: ForwardRefExoticComponent<HotspotDotsLargeProps & RefAttributes<Svg>>;

export default HotspotDotsLarge;
export { HotspotDotsLarge };

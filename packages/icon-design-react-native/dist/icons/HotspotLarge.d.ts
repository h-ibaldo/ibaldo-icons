import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HotspotLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HotspotLarge: ForwardRefExoticComponent<HotspotLargeProps & RefAttributes<Svg>>;

export default HotspotLarge;
export { HotspotLarge };
